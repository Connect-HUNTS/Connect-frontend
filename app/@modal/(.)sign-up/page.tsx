import Portal from "components/shared/Portal"
import Modal from "components/widgets/AuthModal/ui/Modal"

const Page = () => {
    return (
        <Portal>
            <Modal screen="sign-up" hideCloseBtn />
        </Portal>
    )
}

export default Page
