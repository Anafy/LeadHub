import { Navigate, Route, Routes } from "react-router-dom";
import Main from "../../pages/Main/Main";
import Choose from "../../pages/Ai/Ai";
import NavMenu from "../NavMenu/NavMenu";

import styles from './Cabinet.module.sass'
import Chat from "../../pages/Chat/Chat";


export default function Cabinet() {
    return (
        <main className={styles.cabinet}>
            <NavMenu/>
            <Routes>
                <Route path='/main' element={<Main/>} />
                <Route path='/ai' element={<Choose/>} />
                <Route path='/ai/chatgpt' element={<Chat ai={'gpt'} title={'ChatGPT'} />} />
                <Route path='/ai/dalle' element={ <Chat ai={'dalle'} title={'DALL-E'} /> } />
                <Route path='*' element={<Navigate to={`/cabinet/main`} replace />} />
            </Routes>
        </main>
    )
}