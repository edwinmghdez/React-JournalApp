import React, { useEffect, useState } from 'react'
import {firebase} from '../firebase/firebase-config';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setchecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async(user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
                dispatch(startLoadingNotes(user.uid));
            } else {
                setIsLoggedIn(false);
            }
            setchecking(false);
        });
    }, [dispatch, setchecking, setIsLoggedIn]);

    if (checking) {
        return (
            <h1>Wait....</h1>
        )
    }    

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PrivateRoute>
                        <JournalScreen />
                    </PrivateRoute>
                }
            />
            <Route
                path="/*"
                element={
                    <PublicRoute>
                        <AuthRouter />
                    </PublicRoute>
                }
            />
        </Routes>
    );
}
