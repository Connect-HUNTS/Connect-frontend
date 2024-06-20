import s from "./AuthModal.module.scss"
import { useRouter } from "next/navigation"

const AuthModal = () => {
    const router = useRouter()

    return (
        <>
            <button className={s.navButton} onClick={() => router.push("/sign-in")}>
        Log In
            </button>
            <button className={s.navButton} onClick={() => router.push("/sign-up")}>
        Sign Up
            </button>
        </>
    )
}

export default AuthModal
