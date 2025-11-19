import AuthNavigation from './AuthNavigation';
import DrawerNavigation from './DrawerNavigation';
import useAuth from '@/hooks/quries/useAuth';
function RootNavigation() {
  const {isLogin} = useAuth();

  return <>{isLogin ? <DrawerNavigation /> : <AuthNavigation />}</>;
}

export default RootNavigation;
