import { Button, ListGroup } from "react-bootstrap";
const Tarea = ({tarea,eliminarTarea}) => {
    return ( 
        <ListGroup.Item className="d-flex justify-content-between">
            {tarea}
            <Button variant="danger" onClick={eliminarTarea}>Eliminar</Button>
        </ListGroup.Item>       
    );
};
export default Tarea;