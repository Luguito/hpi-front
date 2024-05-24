export const RevealSectionInitial = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.3,
        }
    },
}

export const RevealTextAfterSection = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            stiffness: 0
        }
    },
}

export const RevealFromLeftToRight = {
    hidden: {
        opacity: 0,
        x: -50
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            delay: 0.4,
            ease: "easeInOut"
        }
    },
}

export const RevealFromRightToLeft = {
    hidden: {
        opacity: 0,
        x: 50
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            delay: 0.4,
            ease: "easeInOut"
        }
    },
}

export const RevealFromTopToBottom = {
    hidden: {
        opacity: 0,
        y: -50
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            delay: 0.4,
            ease: "easeInOut"
        }
    },
}

export const RevealFromBottomToTop = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            delay: 0.4,
            ease: "easeInOut"
        }
    },
}