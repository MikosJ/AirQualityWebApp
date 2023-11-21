import {Map} from "../Map/Map.tsx";
import {GraphModal} from "../Map/GraphModal.tsx";
import {useState} from "react";


export const MainActivity = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Map openModal={openModal} />
            <GraphModal isOpen={isModalOpen} onRequestClose={closeModal} />
        </>
    );
};