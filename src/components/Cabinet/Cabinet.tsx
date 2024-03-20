import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Main from "../../pages/Main/Main";
import Marathon from "../../pages/Marathon/Marathon";
import Profile from "../../pages/Profile/Profile";
import FAQ from "../../pages/FAQ/FAQ";
import Choose from "../../pages/Ai/Ai";
import NavMenu from "../NavMenu/NavMenu";

import styles from './Cabinet.module.sass'
import Chat from "../../pages/Chat/Chat";
import { useSnackbar } from "notistack";
import apiFetch from "../../config/api";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { LoaderContext } from "../../context/LoaderContext";


export default function Cabinet() {

    const [user, setUser] = useState<User | null>(null);

    const { enqueueSnackbar } = useSnackbar();

    const { showLoading, hideLoading } = useContext(LoaderContext);

    const navigate = useNavigate()

    const updateUser = async () => {
        await apiFetch('/user', 'GET', null, 'cabinet', enqueueSnackbar, navigate, showLoading, hideLoading).then((res) => {
            if (res.status === true) {
                setUser(res.user_data);
            }
        });
        return null;
    }

    useEffect(() => {
        updateUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, updateUser }}>
            <main className={styles.cabinet}>
                <NavMenu/>
                <Routes>
                    <Route path='/main' element={<Main/>} />
                    <Route path='/marathon' element={<Marathon/>} />
                    <Route path='/ai' element={<Choose/>} />
                    <Route path='/profile' element={<Profile/>} />
                    <Route path='/faq' element={<FAQ/>} />
                    <Route path='/ai/chatgpt' element={<Chat ai={'gpt'} title={'ChatGPT'} />} />
                    <Route path='/ai/dalle' element={ <Chat ai={'dalle'} title={'DALL-E'} /> } />
                    <Route path='*' element={<Navigate to={`/cabinet/main`} replace />} />
                </Routes>
            </main>
        </UserContext.Provider>
    )
}