"use client"

import s from "./Modal.module.scss"

import { FC, ReactNode } from "react"

import { useRouter } from "next/navigation"

import { useFormState } from "react-dom"
import { googleAuthenticate } from "lib/actions"

import { Screen } from "../../types" // don't change to root dir path, it is local type
import CloseSVG from "components/shared/icons/CloseSVG"
import GoogleSVG from "components/shared/icons/GoogleSVG"

import TelegramAuthButton from "components/features/TelegramAuthButton"

import Header from "../Header"
import SignUpScreen from "../SignUpScreen"
import SignInScreen from "../SignInScreen"

interface DefaultModal {
  screen: Screen;
  hideCloseBtn?: boolean;
}

interface ContentWrapper {
  onClose: () => void;
  title: string;
  prescription: ReactNode;
  hideCloseBtn?: boolean;
  children: ReactNode;
}

const ContentWrapper: FC<ContentWrapper> = ({
    onClose,
    title,
    prescription,
    hideCloseBtn = false,
    children,
}) => {
    const [errorMsgGoogle, dispatchGoogle] = useFormState(
        googleAuthenticate,
        undefined,
    )

    return (
        <div className={s.content}>
            <div className={s.closeBtn}>
                {!hideCloseBtn && (
                    <button onClick={onClose}>
                        <CloseSVG />
                    </button>
                )}
            </div>
            <div className={s.oauthWrapper}>
                <h2 className={s.oauthTitle}>{title}</h2>
                <p className={s.oauthPrescription}>{prescription}</p>
                <form action={dispatchGoogle}>
                    <button className={s.btn}>
                        <GoogleSVG />
            Continue with Google
                    </button>
                </form>
                <TelegramAuthButton className={s.btn} />
            </div>
            {children}
        </div>
    )
}

const Modal: FC<DefaultModal> = ({ screen, hideCloseBtn = false }) => {
    const router = useRouter()

    const onClose = () => {
        router.back()
    }

    const changeScreen = () => {
        router.push(screen === "sign-in" ? "/sign-up" : "/sign-in")
    }

    return (
        <div className={s.wrapper}>
            <div className={s.modal}>
                <Header screen={screen} changeScreen={changeScreen} />
                {screen === "sign-in" ? (
                    <ContentWrapper
                        title="Log In"
                        hideCloseBtn={hideCloseBtn}
                        prescription={
                            <>
                Welcome back, log in or <br />
                                <span onClick={changeScreen}>create a new account</span> for
                free
                            </>
                        }
                        onClose={onClose}
                    >
                        <SignInScreen />
                    </ContentWrapper>
                ) : (
                    <ContentWrapper
                        title="Sign Up"
                        hideCloseBtn={hideCloseBtn}
                        prescription={
                            <>
                We are almost done, we just need to know <br />
                your name, a cool nickname, and your role <br />
                to get you the best deals
                            </>
                        }
                        onClose={onClose}
                    >
                        <SignUpScreen />
                    </ContentWrapper>
                )}
            </div>
        </div>
    )
}

export default Modal
