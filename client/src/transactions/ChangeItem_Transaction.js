
import jsTPS_Transaction from "../common/jsTPS.js"

/**
 * ChangeItem_Transaction
 * 
 * This class represents a transaction that updates the text
 * for a given item. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author Hua Lin
 */
export default class ChangeItem_Transaction extends jsTPS_Transaction {
    constructor(initStore, initIndex,initOldText, initNewText) {
        super();
        this.store = initStore;
        this.Index=initIndex;
        this.oldText = initOldText;
        this.newText = initNewText;
    }

    doTransaction() {
        this.store.changeItem(this.Index, this.newText);
    }
    
    undoTransaction() {
        this.store.changeItem(this.Index, this.oldText);
        
    }
}