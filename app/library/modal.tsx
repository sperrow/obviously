'use client';

import { Dialog } from 'radix-ui';
import { useState } from 'react';
import LibraryTable from './table';
import { Cross2Icon, ArrowRightIcon } from '@radix-ui/react-icons';

import './modal.css';

export default function LibraryModal() {
    const [isModalOpen, setIsModalOpen] = useState(true);

    return (
        <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
            <Dialog.Trigger asChild>
                <button className="border bg-blue-500 text-white p-2 rounded-md font-bold hover:bg-blue-600 transition duration-300">
                    Open library
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-slate-500 data-[state=open]:animate-overlayShow" />
                <Dialog.Content className="fixed w-11/12 h-5/6 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-8 overflow-y-auto shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
                    <Dialog.Title className="text-lg font-bold">Library</Dialog.Title>
                    <Dialog.Description className="mb-4 mt-2.5 text-[15px] leading-normal text-mauve11">
                        Here is a list of datasets already connected to your Obviously AI account.
                    </Dialog.Description>
                    <hr className="w-full h-px my-8 bg-slate-300 border-0" />
                    <LibraryTable />
                    <div className="flex justify-end mt-4">
                        <button
                            type="button"
                            className="border bg-blue-500 text-white text-xl py-3 px-8 rounded-lg font-bold hover:bg-blue-600 transition duration-300 flex items-center gap-2"
                        >
                            Next <ArrowRightIcon width={20} height={20} />
                        </button>
                    </div>
                    <Dialog.Close asChild>
                        <button
                            className="absolute right-2.5 top-2.5 inline-flex size-16 appearance-none items-center justify-center"
                            aria-label="Close"
                        >
                            <Cross2Icon width={24} height={24} color="lightgray" />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
