import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { app } from '../firebase/firebase.init';

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
export const AuthContext = createContext(null)
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// AuthProvider
const AuthProvider = ({ children }) => {
  const auth = getAuth(app)
  const googleProvider = new GoogleAuthProvider();

  // extra work for getting email from firebase
  googleProvider.addScope("email");
  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const notifySuccess = (msg) => toast.success(<ToastSuccess msg={msg} />);
  const ToastSuccess = ({ msg }) => (
    <span className='text-lg text-green-600 font-semibold font-bricolage-grotesque leading-6'>{msg}</span>
  );

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  const logOut = () => {
    setLoading(true);
    signOut(auth);
    notifySuccess("Logout successful");
    return
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async currentUser => {
      try {
        if (currentUser) {
          const fixedUser = {
            ...currentUser,
            email: currentUser.email || currentUser?.providerData?.[0]?.email || null,
          };

          setUser(fixedUser);
          console.log('CurrentUser-->', fixedUser?.displayName, fixedUser?.email)
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error('Auth error==>', err);
      } finally {
        setLoading(false);
      }
    });

    return () => unSubscribe();
  }, []);


  const authInfo = { user, setUser, loading, setLoading, createUser, signIn, signInWithGoogle, logOut, updateUserProfile };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider