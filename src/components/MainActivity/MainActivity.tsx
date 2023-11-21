import {Map} from "../Map/Map.tsx";
import {GraphModal} from "../Map/GraphModal.tsx";
import {useState} from "react";
import {AverageValuesModal} from "../Map/AverageValuesModal.tsx";


export const MainActivity = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAvgModalOpen, setIsAvgModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const openAvgModal = () => {
        setIsAvgModalOpen(true);
    };

    const closeAvgModal = () => {
        setIsAvgModalOpen(false);
    };

    return (
        <>
            <Map openModal={openModal} openAvgModal={openAvgModal} />
            <GraphModal isOpen={isModalOpen} onRequestClose={closeModal} />
            <AverageValuesModal isOpen={isAvgModalOpen} onRequestClose={closeAvgModal}></AverageValuesModal>
        </>
    );
};