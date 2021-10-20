import { useContext } from 'react'
import { GlobalStoreContext } from '../store'
import { useHistory } from 'react-router-dom'
/*
    This toolbar is a functional React component that
    manages the undo/redo/close buttons.
    
    @author McKilla Gorilla
*/
function EditToolbar() {
    const { store } = useContext(GlobalStoreContext);
    const history = useHistory();

    let enabledButtonClass = "top5-button-disabled";
    let ButtonClass= "top5-button-disabled"
   
    function handleUndo() {
        store.undo();
    }
    function handleRedo() {
        store.redo();
    }
    function handleClose() {
        store.closeCurrentList();   
        history.push("/");
    }
    let editStatus = true;
    if (store.isItemNameEditActive) {
         editStatus = false;
    }
    
    let hasCurrent= false;
    if (store.currentList!=null){hasCurrent=true;ButtonClass="top5-button";}

    return (
        <div id="edit-toolbar">
            <div
                disabled={editStatus}
                id='undo-button'
                onClick={handleUndo}
                className={enabledButtonClass}>
                &#x21B6;
            </div>
            <div
                disabled={editStatus}
                id='redo-button'
                onClick={handleRedo}
                className={enabledButtonClass}>
                &#x21B7;
            </div>
            <div
                disabled={hasCurrent}
                id='close-button'
                onClick={handleClose}
                className={ButtonClass}>
                &#x24E7;
            </div>
        </div>
    )
}

export default EditToolbar;