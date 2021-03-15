import React, { Fragment, useState } from 'react';
import { View, Image, StatusBar, TextInput, SafeAreaView, ToastAndroid, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styles } from './styles';
import Icons from 'react-native-vector-icons/AntDesign';
import Iconss from 'react-native-vector-icons/Entypo';
import ImagePicker from 'react-native-image-crop-picker';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';


const AddSpace = ({ props }) => {

    const [SpaceName, setSpace] = useState('');
    const [credit, setCredit] = useState('');
    const [distance, setDistance] = useState('');
    const [guest, setGuest] = useState('');
    const [Descript, setDescript] = useState('');
    const [Location, setLocation] = useState('');
    const [monday, setMonday] = useState('');
    const [Tuesday, setTue] = useState('');
    const [Wednesday, setWed] = useState('');
    const [Thrusday, setThur] = useState('');
    const [Friday, setFri] = useState('');
    const [Saturday, setSat] = useState('');
    const [sunday, setSun] = useState('');
    const [usern, setuserName] = useState('');
    const [Images, setImage] = useState('');
    const [count, setCount] = useState(0);
    const [Host, setHost] = useState('');
    const [GetImage, setGetImage] = useState('')
    const selectImage = () => {

        ImagePicker.openPicker({
            width: 200,
            height: 200,
            cropping: true,
        }).then(image => {
            console.log(image)
            setImage({ Path: image.path })

        });
    }

    function uploaddata() {
        console.log(Images)
        auth().onAuthStateChanged((user) => {
            if (user) {
                setuserName(user.uid)

                firestore().collection('Data').doc(SpaceName).set({
                    Space: SpaceName,
                    Host: Host,
                    credit: credit,
                    distance: distance,
                    guest: guest,
                    Descript: Descript,
                    Location, Location,
                    monday: monday,
                    Tuesday: Tuesday,
                    Wednesday: Wednesday,
                    Thrusday: Thrusday,
                    Friday: Friday,
                    Saturday: Saturday,
                    sunday: sunday,
                })


                let reference = storage().ref('Images/' + SpaceName);         // 2
                let task = reference.putFile(Images.Path);


                task.then(() => {
                    getImage()
                }).catch((e) => console.log('uploading image error => ', e));

            } else {
                return false
            }
        })

    }
    const getImage = () => {
        let imageRef = storage().ref('/Images/' + SpaceName);
        imageRef
            .getDownloadURL()
            .then((url) => {
                //from url you can fetched the uploaded image easily
                firestore().collection('Space').add({
                    Space: SpaceName,
                    Guest: guest,
                    distance: distance,
                    Image: url
                })
            }).catch = (err => { console.log(err) })
    }

    console.log(Images)
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />

            <SafeAreaView style={{ backgroundColor: 'white' }} />
            <SafeAreaView style={styles.safeContainer} >
                <View style={styles.mainContainer}>
                    <ScrollView>
                        <Text style={styles.headText}>
                            Add Space Details
                    </Text>

                        <View style={styles.inputView}>
                            <TouchableOpacity onPress={() => selectImage()}>
                                <Text>Upload Images</Text>
                            </TouchableOpacity>
                            {Images != '' &&
                                <View style={{ marginRight: 10 }}>
                                    <Image source={{ uri: Images.Path }} style={{ height: 200, width: 200 }} />
                                </View>}

                            <Input
                                placeholder='Enter Space Name'
                                style={styles.fieldView}
                                value={SpaceName}
                                onChangeText={(val) =>
                                    setSpace(val)
                                }
                            />
                            <Input
                                placeholder='Enter Host Name'
                                style={styles.fieldView}
                                value={Host}
                                onChangeText={(val) =>
                                    setHost(val)
                                }
                            />
                            <Input
                                placeholder='Credit per hour'
                                style={styles.fieldView}
                                value={credit}
                                onChangeText={(val) =>
                                    setCredit(val)
                                }
                            />
                            <Input
                                placeholder='Distance'
                                style={styles.fieldView}
                                value={distance}
                                onChangeText={(val) =>
                                    setDistance(val)
                                }
                            />
                            <Input
                                placeholder='Number Guest'
                                style={styles.fieldView}
                                value={guest}
                                onChangeText={(val) =>
                                    setGuest(val)
                                }
                            />
                            <Input
                                placeholder='Description'
                                multiline={true}
                                style={styles.desView}
                                value={Descript}
                                onChangeText={(val) =>
                                    setDescript(val)
                                }
                            />
                            <Input
                                placeholder='Location'
                                multiline={true}
                                style={styles.desView}
                                value={Location}
                                onChangeText={(val) =>
                                    setLocation(val)
                                }
                            />
                            <Text style={styles.headText}>Open Hours</Text>
                            <View style={styles.timeView}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <View style={styles.hourView}>
                                        <Text style={styles.dayText}>Monday</Text>

                                        <TextInput
                                            placeholder='8am- 8pm'
                                            multiline={true}
                                            style={styles.dayView}
                                            value={monday}
                                            onChangeText={(val) =>
                                                setMonday(val)
                                            }
                                        />
                                    </View>
                                    <View style={styles.hourView}>
                                        <Text style={styles.dayText}>Tuesday</Text>
                                        <TextInput
                                            placeholder='8am- 8pm'
                                            multiline={true}
                                            style={styles.dayView}
                                            value={Tuesday}
                                            onChangeText={(val) =>
                                                setTue(val)
                                            }
                                        />
                                    </View>
                                    <View style={styles.hourView}>
                                        <Text style={styles.dayText}>Wednesday</Text>
                                        <TextInput
                                            placeholder='8am- 8pm'
                                            multiline={true}
                                            style={styles.dayView}
                                            value={Wednesday}
                                            onChangeText={(val) =>
                                                setWed(val)
                                            }
                                        />
                                    </View>
                                    <View style={styles.hourView}>
                                        <Text style={styles.dayText}>Thursday</Text>
                                        <TextInput
                                            placeholder='8am- 8pm'
                                            multiline={true}
                                            style={styles.dayView}
                                            value={Thrusday}
                                            onChangeText={(val) =>
                                                setThur(val)
                                            }
                                        />
                                    </View>
                                    <View style={styles.hourView}>
                                        <Text style={styles.dayText}>Friday</Text>
                                        <TextInput
                                            placeholder='8am- 8pm'
                                            multiline={true}
                                            style={styles.dayView}
                                            value={Friday}
                                            onChangeText={(val) =>
                                                setFri(val)
                                            }
                                        />
                                    </View>
                                    <View style={styles.hourView}>
                                        <Text style={styles.dayText}>Saturday</Text>
                                        <TextInput
                                            placeholder='8am- 8pm'
                                            multiline={true}
                                            style={styles.dayView}
                                            value={Saturday}
                                            onChangeText={(val) =>
                                                setSat(val)
                                            }
                                        />
                                    </View>
                                    <View style={styles.hourView}>
                                        <Text style={styles.dayText}>Sunday</Text>
                                        <TextInput
                                            placeholder='8am- 8pm'
                                            multiline={true}
                                            style={styles.dayView}
                                            value={sunday}
                                            onChangeText={(val) =>
                                                setSun(val)
                                            }
                                        />
                                    </View>


                                </ScrollView>
                            </View>



                            <View style={styles.signupView}>
                                <TouchableOpacity style={styles.signupOpacity} onPress={() => {
                                    uploaddata()
                                }}>
                                    <Text style={styles.signupText}>Save</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView >
            <SafeAreaView style={{ backgroundColor: 'white' }} />

        </Fragment >
    )
}

export default AddSpace;