import React from 'react';
import useSelectedClasses from '../../../hooks/useSelectedClasses';

const MySelectedClasses = () => {
    const [selectedClasses] = useSelectedClasses();
    console.log(selectedClasses);

    return (
        <div>
            <h2>my selected classes: {selectedClasses.length}</h2>
        </div>
    );
};

export default MySelectedClasses;