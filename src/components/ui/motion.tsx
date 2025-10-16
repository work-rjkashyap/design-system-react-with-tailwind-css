import type { HTMLMotionProps, Variant } from "framer-motion";
import { motion } from "motion/react";
import { forwardRef } from "react";

const easeBrand = [0.2, 0.8, 0.2, 1] as const;

export const motionTokens = {
    durations: {
        micro: 0.12,
        quick: 0.18,
        base: 0.24,
    },
    easing: {
        brand: easeBrand,
    },
} as const;

export type MotionTokens = typeof motionTokens;

const baseVariants: Record<
    "scaleIn" | "fadeInUp",
    Variant
> = {
    scaleIn: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: motionTokens.durations.base,
            ease: motionTokens.easing.brand,
        },
    },
    fadeInUp: {
        opacity: 1,
        y: 0,
        transition: {
            duration: motionTokens.durations.quick,
            ease: motionTokens.easing.brand,
        },
    },
};

const hiddenVariants: Record<"scaleIn" | "fadeInUp", Variant> = {
    scaleIn: {
        opacity: 0,
        scale: 0.96,
    },
    fadeInUp: {
        opacity: 0,
        y: 12,
    },
};

export const MotionButton = forwardRef<HTMLButtonElement, HTMLMotionProps<"button">>(
    (
        {
            initial = "hidden",
            animate = "visible",
            variants,
            whileTap,
            ...props
        },
        ref
    ) => (
        <motion.button
            ref={ref}
            initial={initial}
            animate={animate}
            variants={
                variants ?? {
                    hidden: hiddenVariants.scaleIn,
                    visible: baseVariants.scaleIn,
                }
            }
            whileTap={
                whileTap ?? {
                    scale: 0.97,
                    transition: {
                        duration: motionTokens.durations.micro,
                        ease: motionTokens.easing.brand,
                    },
                }
            }
            {...props}
        />
    )
);

MotionButton.displayName = "MotionButton";

export const MotionCard = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
    (
        {
            initial = "hidden",
            animate = "visible",
            variants,
            ...props
        },
        ref
    ) => (
        <motion.div
            ref={ref}
            initial={initial}
            animate={animate}
            variants={
                variants ?? {
                    hidden: hiddenVariants.fadeInUp,
                    visible: baseVariants.fadeInUp,
                }
            }
            {...props}
        />
    )
);

MotionCard.displayName = "MotionCard";
