import { Outlet, useLocation } from "react-router-dom";
        import { TopNavBar, BottomNavBar, SideNav } from "liamc9npm";
        import { useEffect } from "react";
  
        export default function Root() {
          const location = useLocation();
  
          // Scroll to top whenever the location.pathname changes
          useEffect(() => {
            window.scrollTo(0, 0);
          }, [location.pathname]);
  
          // Function to determine if the BottomNavBar should be hidden
          const shouldHideBottomNavBar = () => {
            // List the paths where BottomNavBar should be hidden
            const pathsToHide = ["/login", "/signup"];
            return pathsToHide.includes(location.pathname);
          };
  
          const shouldHideTopNav = () => {
            // List the paths where TopNavBar should be hidden
            const pathsToHide = ["/updatecarddetails"];
            return pathsToHide.includes(location.pathname);
          };
          const shouldHideSideNav = () => {
            // List the paths where SideNavBar should be hidden
            const pathsToHide = ["/updatecarddetails"];
            return pathsToHide.includes(location.pathname);
          };
  
          return (
            <>
              <div className="min-h-screen overflow-y-auto overflow-x-hidden bg-white">
                <div className="md:hidden">
                  {!shouldHideTopNav() && <TopNavBar />}
                  {!shouldHideBottomNavBar() && <BottomNavBar />}
                </div>
                <div className="hidden md:block">
                  {!shouldHideSideNav() && <SideNav />}
                </div>
                <Outlet />
              </div>
            </>
          );
        }