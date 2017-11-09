import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    Dimensions,
    TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
let width = Dimensions.get('window').width


const Header = ({ children }) => (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>
            {children}
        </Text>
    </View>
)
const ListItem = ({ row }) => (
    <TouchableHighlight>
        <View style={styles.item}>
            <Text style={styles.title}>{row.name}</Text>
            <Image
                source={{ uri: row.thumb }}
                style={styles.thumb}
            >
                <Icon
                    name='logo-youtube'
                    size={28}
                    style={styles.play} />
            </Image>
            <View style={styles.itemFooter}>
                <View style={styles.handleBox}>
                    <Icon
                        name='ios-heart-outline'
                        size={20}
                        style={styles.like} />
                    <Text style={styles.handleText}>喜欢</Text>
                </View>
                <View style={styles.handleBox}>
                    <Icon
                        name='ios-text-outline'
                        size={20}
                        style={styles.comment} />
                    <Text style={styles.handleText}>评论</Text>
                </View>

            </View>
        </View>
    </TouchableHighlight>

)


export default class Chat extends Component {
    constructor(){
        super()
        this.state = {
            dataSource:[]
        }
    }
    renderItem(item) {
        return (<ListItem row={item} key={item.id}></ListItem>)
    }
    componentDidMount() {
        this.getHttpData()
    }
    getHttpData() {
        return fetch('https://easy-mock.com/mock/59a686034006183e48ec96af/example/api/getHomeData')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource:responseJson.data.list
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
    async getMoviesFromApi() {
        try {
            // 注意这里的await语句，其所在的函数必须有async关键字声明
            let response = await fetch('https://facebook.github.io/react-native/movies.json');
            let responseJson = await response.json();
            return responseJson.movies;
        } catch (error) {
            console.error(error);
        }
    }
    render() {
        // const data = [
        //     {
        //         key: 11,
        //         _id: "哈士奇的微笑",
        //         thumb: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510138949901&di=da3453333eedba35a88a022f5a72d68f&imgtype=0&src=http%3A%2F%2Fstatic.21ke.com%2Flc%2Fxwbg%2F201510215ebad6d0a3e1848734703bcc7b99fa95.png'
        //     }
        // ]
        return (
            <View style={styles.container}>
                <Header>人模狗样</Header>
                <FlatList
                    automaticallyAdjustContentInsets={false}
                    data={this.state.dataSource}
                    renderItem={({ item }) => this.renderItem(item)}
                />
            </View>
        )
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingTop: 25,
        paddingBottom: 12,
        backgroundColor: '#176348'
    },
    headerTitle: {
        textAlign: 'center',
        fontSize: 16,
        color: '#fff',
    },
    item: {
        width: width,
        marginBottom: 10,
    },
    thumb: {
        // flexDirection: 'row',
        width: width,
        height: width * 0.5,
        // justifyContent: 'center',
        // alignItems:'center'
    },
    title: {
        padding: 10,
        fontSize: 18,
        color: '#333'
    },
    itemFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#eee'
    },
    handleBox: {
        padding: 10,
        flexDirection: 'row',
        width: width / 2 - 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    play: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'transparent',
        color: 'white'
    }
});
