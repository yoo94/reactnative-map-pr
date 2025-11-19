import {getAccessToken, getProfile, postLogin, postSignup} from '@/api/auth';
import queryClient from '@/api/queryClient';
import {numbers} from '@/constants/numbers';
import {UseMutationCustomOptions} from '@/types/api';
import {Profile} from '@/types/domain';
import {removeEncryptStorage, setEncryptStorage} from '@/utils/encryptStorage';
import {removeHeader, setHeader} from '@/utils/header';
import {useMutation, useQuery} from '@tanstack/react-query';
import {useEffect} from 'react';

function useSignup(mutationOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: postSignup,
    ...mutationOptions,
  });
}

function useLogin(mutationOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: postLogin,
    onSuccess: async ({accessToken, refreshToken}) => {
      setHeader('Authorization', `Bearer ${accessToken}`);
      await setEncryptStorage('refreshToken', refreshToken);
      // 프로필 데이터 미리 가져오기 (prefetch)
      queryClient.fetchQuery({
        queryKey: ['auth', 'getProfile'],
        queryFn: getProfile,
      });
    },
    ...mutationOptions,
  });
}

function useGetRefreshToken() {
  const {data, isSuccess, isError} = useQuery({
    queryKey: ['auth', 'getRefreshToken'], // 캐싱을 위한 키
    queryFn: getAccessToken,
    staleTime: numbers.ACCESS_TOKEN_REFRESH_TIME, // 토큰 캐싱 시간
    refetchInterval: numbers.ACCESS_TOKEN_REFRESH_TIME, // 토큰 갱신 주기
  });

  useEffect(() => {
    async () => {
      if (isSuccess && data) {
        setHeader('Authorization', `Bearer ${data.accessToken}`);
        await setEncryptStorage('refreshToken', data.refreshToken);
      }
    };
  }, [isSuccess, data]);

  useEffect(() => {
    if (isError) {
      removeHeader('Authorization');
      removeEncryptStorage('refreshToken');
    }
  }, [isError]);

  return {isSuccess, isError};
}

function useGetProfile(queryOptions?: UseMutationCustomOptions<Profile>) {
  return useQuery({
    queryKey: ['auth', 'getProfile'],
    queryFn: getProfile,
    ...queryOptions,
  });
}

function useAuth() {
  const signupMutation = useSignup();
  const loginMutation = useLogin();
  const refreshTokenQuery = useGetRefreshToken();
  const {data, isSuccess: isLogin} = useGetProfile({
    enabled: refreshTokenQuery.isSuccess, // 리프레시 토큰이 불러오기가 성공 때만 프로필 조회
  });
  return {signupMutation, loginMutation, isLogin, data};
}

export default useAuth;
