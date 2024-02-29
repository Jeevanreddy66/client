"use client";
import React, { FC } from "react";
import { Modal, Box } from "@mui/material";

type CustomModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
  component: any;
  setRoute?: (route: string) => void;
};

const CustomModal: FC<CustomModalProps> = ({
  open,
  setOpen,
  setRoute,
  component: Component,
}) => {
  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-[50%] left-[50%] -trnslate-x-1/2 w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadownp-4 outline-none">
          <Component />
        </Box>
      </Modal>
    </>
  );
};

export default CustomModal;
