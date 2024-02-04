import ListGroup from 'react-bootstrap/ListGroup';
import Tarea from './Tarea';

const ListaTarea = ({tareas,eliminarTarea}) => {
    return (
        <ListGroup>
            {tareas.map((tarea, index) => (
                <Tarea key={index} tarea={tarea} eliminarTarea={()=>eliminarTarea(index)}/>
            ))}
      </ListGroup>
    );
};

export default ListaTarea;