import * as React from 'react';

import { TravelCard } from './TravelCard';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function TravelCardExpanded () {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
        <dialog open={open} onClose={handleClose} TransitionComponent={Transition}>
            <TravelCard travel={travel} />
        </dialog>
    );
    }
            

            

    




