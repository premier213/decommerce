import DesktopNavigationBar from './desktop';
import MobileNavigationBar from './mobile';

const NavigationBar = (): JSX.Element => (
  <div>
    <DesktopNavigationBar />
    <MobileNavigationBar />
  </div>
);

export default NavigationBar;
