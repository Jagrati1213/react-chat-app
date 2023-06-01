import { createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { auth, db, storage } from '../../firebaseStore/Firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";


const initialState = {
    currentUser: null
}

const AddUserSlice = createSlice({
    name: 'addUsers',
    initialState,
    reducers: {

        // Signin with firebase
        SigninAction: async (state, action) => {
            const Cuser = action.payload;
            try {

                // User Authentication
                const res = await createUserWithEmailAndPassword(auth, Cuser.email, Cuser.password);

                // User's ProfileImage
                const storageRef = ref(storage, Cuser.displayName);
                const uploadTask = uploadBytesResumable(storageRef, Cuser.file);

                uploadTask.on(
                    (error) => {
                        toast.error('somthing wrong');
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref)
                            .then(async (downloadURL) => {
                                // update User's profile with name & image
                                await updateProfile(res.user, {
                                    displayName: Cuser.displayName,
                                    photoURL: downloadURL,
                                });
                                // Add  "Users" collection into firebase
                                await setDoc(doc(db, "users", res.user.uid), {
                                    uid: res.user.uid,
                                    displayName: Cuser.displayName,
                                    email: res.user.email,
                                    photoURL: downloadURL
                                });

                                // Add "User's Chat" collection into firebase
                                await setDoc(doc(db, 'userchats', res.user.uid), {});
                            });
                    }
                );
                toast.success('Account Created..')
            } catch (err) {
                console.log(err);
            }

        },

        // Set CurrentUser
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
            console.log(state.currentUser);
        },

        // Signout with firebase
        removeUser: (state, action) => {
            signOut(auth);
        }

    }
});

export const { SigninAction, setCurrentUser, removeUser } = AddUserSlice.actions;
export default AddUserSlice.reducer;