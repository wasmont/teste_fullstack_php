import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Button, useDisclosure,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
  } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

function AlertDialogComponent (props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const cancelRef = React.useRef()
    const [isLoading, setIsLoading] = useState(false);
  
    function Remover() {
      
      setIsLoading(current => !current);

      axios.delete("http://localhost:9191/api/delete/"+props.id)
        .then((response) => setData(response.data.data))
        .catch((err) => {
          setError(err.message);
        });
      
      setTimeout(function(){
          window.location.reload();
      }, 2000);
      
    }

    useEffect(() => {
      console.log('isLoading is: ', isLoading);
    }, [isLoading]);

    return (
      <>
        <DeleteIcon onClick={onOpen}/>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Aviso
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Deseja remover o item <b>({props.id}-{props.nome})</b> ?
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancelar
                </Button>
                <Button 
                  loadingText='Removendo'
                  variant='outline'
                  colorScheme='red' onClick={Remover} ml={3} className={isLoading ? "Cursor-loading" : "" }>
                  Deletar
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }

  export default AlertDialogComponent;