import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
// import { useSession } from "next-auth/react";

function MainNavigation() {
  // const [session, loading] = useSession();
  // console.log({ session, loading }, "sess load<<<<<<<<<<<<<<<");
  const router = useRouter();
  const onLogout = () => {
    Swal.fire({
      title: "Are you sure to Logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        // Cookies.remove("token");
        localStorage.clear();
        router.push("/login");
        Swal.fire("Success to logout!", "Success to logout.", "success");
      }
    });
  };
  return (
    <header>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-8 w-auto lg:hidden"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
                <img
                  className="hidden h-8 w-auto lg:block"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    href="/"
                    className="bg-gray-900 text-zinc-50 px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                  >
                    Dashboard
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div>
                <Link
                  type="button"
                  className="bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  href="/edit-profile"
                >
                  Edit Profile
                </Link>
              </div>
              <div className="mr-10"></div>

              <div>
                <Link
                  type="button"
                  className="flex bg-gray-800 p-1 text-gray-400 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  href="/login"
                >
                  Login
                </Link>
              </div>

              <div className="relative ml-3">
                <div>
                  <button
                    onClick={onLogout}
                    type="button"
                    className="flex bg-gray-800 p-1 text-gray-400 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;
