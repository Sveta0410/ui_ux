import { Button} from 'antd';
import { Header } from './components/header';
export const Catalog = () =>{

    return (
        <>
            <Header />
            <h>Catalog</h>
            <Button  type="link" href="/" style={{ marginTop: 16 }} >
                На главную
            </Button>
        </>
)}