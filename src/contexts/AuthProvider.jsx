import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { auth } from '../firebase/firebase.init';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const notifySuccess = () => toast.success(<ToastSuccess />);
  const notifyFailed = (error) => toast.error(<ToastFailed error={error} />);
  const ToastSuccess = () => (
    <span className='text-lg text-green-600 font-semibold font-poppins'>Profile updated!</span>
  );
  const ToastFailed = ({ error }) => (
    <div className='font-semibold font-poppins'>
      <div className='flex gap-3 mb-1'>
        <span className='text-lg text-red-600 font-semibold font-poppins'>Profile didn't update!</span>
      </div>
      <p>{error}</p>
    </div>
  );

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => { setLoading(true); return signOut(auth) }

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) { setUser(currentUser); setLoading(false); }
      else { setUser(null); setLoading(false); }
    });
    return () => unSubscribe();
  }, []);

const userInfo = { user, setUser, loading, setLoading, createUser, signInUser, signOutUser, signInWithGoogle };

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider