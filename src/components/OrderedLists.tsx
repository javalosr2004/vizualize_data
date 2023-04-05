import './styles'



class Node{
    data: string | number;
    next: Node | null;
    prev: Node | null;

    constructor(data: string | number, next: Node | null = null, prev: Node | null = null){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }

    add( data: string | number ) {
        let prev = null
        let c_next = this.next;
        while (c_next != null){
            prev = c_next;
            c_next = c_next.next;
        }
        if (prev != null){
            prev.next = new Node(data, prev, null);
        }
    }   

    print_all(){
        let c_data = this.data;
        let c_next = this.next;
        console.log(c_data)
        while (c_next != null){
            
        }
    }
}

function OrderedLists(){
    


}   

export default OrderedLists;