"use client";

import { useRouter } from "next/navigation";
import { MouseEventHandler, useCallback, useEffect, useRef } from "react";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.addEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return <div>{children}</div>;
};

export default Modal;
