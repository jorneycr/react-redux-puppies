import React from 'react';
import { Card } from 'react-bootstrap';
import NavigationBar from '../../components/Navigation';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

export const Adoptado = ({perrito, user, history}) => {

    React.useEffect(() => {
        if(!perrito.selectedPerrito || !user.authUser){
            history.push('/');
        }
    },[perrito])

    return (
        <div className="container-fluid">
            <NavigationBar />
            <h2 className="mt-2">{`Felicidades ${user.authUser.fullName}, adopto a ${perrito.selectedPerrito.nombre}`}</h2>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12  mb-2">
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={perrito.selectedPerrito.img} />
                            <Card.Body>
                                <Card.Title>{perrito.selectedPerrito.nombre}</Card.Title>
                                <Card.Text>
                                    <div>{`Genero: ${perrito.selectedPerrito.genero}`}</div>
                                    <div>{`Edad: ${perrito.selectedPerrito.edad}`}</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = ({ user, perrito }) => ({
    user,
    perrito,
})

export default withRouter(connect(mapStateToProps, null)(Adoptado));