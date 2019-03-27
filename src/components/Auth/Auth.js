import React from 'react'
import { Box, Text } from 'grommet'
import { connect } from 'react-redux'
import { requestClientIdFromApi } from '../../redux/actions/auth'
import Loader from 'react-loader-spinner'
import { QRCode } from 'react-qr-svg'
import { Redirect } from 'react-router-dom'

class Auth extends React.PureComponent {

    componentDidMount() {
        if(this.props.authToken !== null) return
        else this.props.requestClientIdFromApi()
    }

    render() {
        return (
            <Box
                fill
                justify="center"
                align="center"
            >
                {
                    this.props.clientId === null ? <Loader type="Grid" height="3rem" width="3rem" /> : <Box justify="center" align="center" gap="medium">
                        <Text weight={900} size="2rem">Scan the QR code using your Assist app</Text>
                        <QRCode
                            value={this.props.clientId[1]}
                            bgColor="#FFFFFF"
                            fgColor="#000000"
                            level="Q"
                            style={{ width: 256 }}
                        />
                    </Box>
                }
                {
                    this.props.authToken === null ? null : <Redirect to="/feed" />
                }
            </Box>
        )
    }
}

const mapStateToProps = state => ({
    isFetchingClientId: state.isFetching.clientId,
    clientId: state.clientId,
    authToken: state.auth
})

const mapDispatchToProps = {
    requestClientIdFromApi
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)