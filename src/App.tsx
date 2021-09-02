import './App.css'
import 'antd/dist/antd.css'
import React, { ComponentType } from "react"
import { BrowserRouter, Link, Redirect, Route, Switch, withRouter } from "react-router-dom"
import News from "./components/News/News"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import { LoginPage } from "./components/Login/LoginPage"
import { compose } from "redux"
import { connect, Provider } from "react-redux"
import { initializeApp } from "./redux/app-reducer"
import Preloader from "./components/common/Preloader/Preloader"
import store, { AppStateType } from "./redux/redux-store"
import { withSuspense } from "./hoc/withSuspense"
import { UsersPage } from './components/Users/UsersContainer'
import { Breadcrumb, Layout, Menu } from 'antd'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Header } from './components/Header/Header';

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'))

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)
const SuspendedChatPage = withSuspense(ChatPage)

class App extends React.Component<MapPropsType & DispatchPropsType> {
    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert("Some error occured");
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <Layout>
                <Header/>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                style={{ height: '100%' }}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined/>} title="My Profile">
                                    <Menu.Item key="1"><Link to="/profile">Profile</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to="/dialogs">Messages</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined/>} title="Developers">
                                    <Menu.Item key="5"><Link to="/developers">Users</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined/>} title="Interactions">
                                    <Menu.Item key="9"><Link to="/chat">Chat</Link></Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <Switch>
                                <Redirect exact from="/" to="/profile"/>
                                <Route path="/dialogs" render={() => <SuspendedDialogs/>}/>
                                <Route path="/profile/:userId?" render={() => <SuspendedProfile/>}/>
                                <Route path="/developers" render={() => <UsersPage pageTitle={"Разработчики"}/>}/>
                                <Route path="/news" render={() => <News/>}/>
                                <Route path="/music" render={() => <Music/>}/>
                                <Route path="/settings" render={() => <Settings/>}/>
                                <Route path="/login" render={() => <LoginPage/>}/>
                                <Route path='/chat' render={() => <SuspendedChatPage/>}/>
                                <Route path='*' render={() => <div>ERROR 404</div>}/>
                            </Switch>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Social Network ©2021</Footer>
            </Layout>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

let AppContainer = compose<ComponentType>(withRouter,
    connect(mapStateToProps, { initializeApp })
)(App)

const SocialApp: React.FC = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SocialApp;