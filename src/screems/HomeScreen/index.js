import React from 'react';
import { Card, Button } from 'react-bootstrap';
import NavigationBar from '../../components/Navigation';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDogs } from '../../mockRequests/perritos'
import perritosActions from '../../actions/perrito';


export const Home = ({ history, user, perrito, setList, setSelectedDog }) => {

    React.useEffect(() => {
        const dogs = getDogs();
        setList(dogs);
    },[])

    const handleAdopt = (dog) => {
        if(user.authUser){
            setSelectedDog(dog);
            history.push('/felicidades')
        }else{
            history.push('/login') 
        }
    }

    return (
        <div className="container-fluid">
            <NavigationBar />
            <h2 className="mt-2">Adpota un cachorro</h2>
            <div className="container">
                <div className="row">
                    {perrito.list.map(dog => (
                        <div className="col-sm-12 col-md-4 mb-2">
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={dog.img} />
                                <Card.Body>
                                    <Card.Title>{dog.nombre}</Card.Title>
                                    <Card.Text>
                                        <div>{`Genero: ${dog.genero}`}</div>
                                        <div>{`Edad: ${dog.edad}`}</div>
                                    </Card.Text>
                                    <Button onClick={() => handleAdopt(dog)} variant="success">Adoptar</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}


const mapStateToProps = ({ user, perrito }) => ({
    user,
    perrito,
})

const mapDispatchToProps = () => ({
    ...perritosActions,
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps())(Home));