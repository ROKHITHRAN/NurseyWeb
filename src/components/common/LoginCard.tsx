import { X } from "lucide-react";
import { useAppContext, User } from "../../context/AppContext";
import {
  auth,
  provider,
  signInWithPopup,
  db,
} from "../../service/firebase-config.js";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Bounce, toast } from "react-toastify";

const LoginCard = () => {
  const { setLogin, setUser } = useAppContext();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);

      const userRef = doc(db, "users", user.email!);
      const userSnap = await getDoc(userRef);

      let role = "user";

      if (userSnap.exists()) {
        // Keep the role already stored in Firestore
        const userData = userSnap.data();
        role = userData.role || "user"; // fallback to "user" if role is undefined
      }

      const filteredUser: User = {
        email: user.email ?? "",
        displayName: user.displayName ?? "",
        photoURL: user.photoURL ?? "",
        lastLogin: new Date().toISOString(),
        status: "active",
        role: role,
      };
      setUser(filteredUser);

      // const userRef = doc(db, "users", user.email);
      await setDoc(
        userRef,
        {
          ...filteredUser,
        },
        { merge: true }
      ); // Merge to update or create if not exists

      const emailCollectionRef = doc(db, user.email, "placeholderDoc");
      await setDoc(emailCollectionRef, { createdAt: new Date().toISOString() });

      toast.success("Login Success !!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      setLogin(false);
    } catch (error) {
      toast.error("Login Unsuccessful !!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      console.error("Error during Google Sign-In:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50">
      <form className="bg-opacity-100 backdrop-blur-xl shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex justify-between">
          <h2 className="text-white text-xl font-bold mb-4 text-center flex-1">
            Login
          </h2>
          <X className="text-white" onClick={() => setLogin(false)} />
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-white  text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white  mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 mt-2 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleGoogleSignIn}
          >
            Sign in with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginCard;
