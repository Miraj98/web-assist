import React from 'react'
import { Box, Heading, Button, Layer, Text } from 'grommet'
import { Logout } from 'grommet-icons'
import { connect } from 'react-redux'
import { logout } from '../../redux/actions/auth'

class AppBar extends React.Component {

    state = {
        showLogoutModal: false
    }

    render() {
        return (
            <Box
                tag="header"
                direction="row"
                align="center"
                justify="between"
                background="brand"
                pad={{ left: "medium", right: "small", vertical: "small" }}
                elevation="medium"
                style={{ zIndex: '1' }}
            >
                <Heading level='3' margin='none'>Assist</Heading>
                <Button icon={<Logout/>} onClick={() => this.setState(prevState => ({ ...prevState, showLogoutModal: true }))} />
                {
                    this.state.showLogoutModal ? <Layer>
                        <Box pad="medium" justify="center" align="center">
                            <Text weight={900} color="black">Are you sure you want to Logout?</Text>
                            <Button label="YES" onClick={() => {
                                this.props.logout()
                                this.setState(prevState => ({ ...prevState, showLogoutModal: false }))
                            }} />
                        </Box>
                    </Layer> : null
                }
            </Box>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})
const mapDispatchToProps = {
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBar)