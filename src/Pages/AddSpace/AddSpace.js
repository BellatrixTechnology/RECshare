import React, { Fragment, useState } from 'react';
import { View, Image, StatusBar, TextInput, SafeAreaView, ToastAndroid, ActivityIndicator, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styles } from './styles';
import Icons from 'react-native-vector-icons/AntDesign';
import Iconss from 'react-native-vector-icons/Entypo';
import ImagePicker from 'react-native-image-crop-picker';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { Picker } from '@react-native-picker/picker';
import { hp, wp } from '../../Global/Styles/Scalling';


const AddSpace = (props) => {

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
    const [SelectedValue, setSelectedValue] = useState('')
    const [isVisible, setIsVisble] = useState(false)
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
    const CheckData = () => {
        if (SpaceName != '', credit != '' && distance != '' && guest != '' && Descript != '' && Location != '' && monday != '' && Tuesday != '' && Wednesday != '' && Thrusday != '' &&
            Friday != '' && Saturday != '' && sunday != '' && Images != '' && Host != '' && SelectedValue != ''
        ) {
            uploaddata()
            setIsVisble(true)
        }
        else {
            ToastAndroid.showWithGravity(
                "Fill all Fields",
                ToastAndroid.LONG,
                ToastAndroid.CENTER
            );
        }
    }
    function uploaddata() {
        console.log(Images)
        auth().onAuthStateChanged((user) => {
            if (user) {
                setuserName(user.uid)


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
        let id = firestore().collection('Data').doc().id
        // let ids = firestore('Space').doc().id()

        let imageRef = storage().ref('/Images/' + SpaceName);
        imageRef
            .getDownloadURL()
            .then((url) => {
                //from url you can fetched the uploaded image easily
                firestore().collection('Space').doc(id).set({
                    Space: SpaceName,
                    Guest: guest,
                    distance: distance,
                    Image: url,
                    credit: credit,
                    spaceid: id,
                    isLikedBy: []
                }).then(() => {
                    firestore().collection('Data').doc(id).set({
                        spaceid: id,
                        Space: SpaceName,
                        Host: Host,
                        credit: credit,
                        distance: distance,
                        guest: guest,
                        Descript: Descript,
                        Location: Location,
                        monday: monday,
                        Tuesday: Tuesday,
                        Wednesday: Wednesday,
                        Thrusday: Thrusday,
                        Friday: Friday,
                        Saturday: Saturday,
                        sunday: sunday,
                        type: SelectedValue,
                        Image: url,
                        isLikedBy: []

                    })


                })
            }).then(() =>
                firestore().collection(SelectedValue).add({
                    Type: SelectedValue,
                    Space: SpaceName
                })

            ).then(() => {
                setIsVisble(false)
                ToastAndroid.showWithGravity(
                    "Uploaded",
                    ToastAndroid.LONG,
                    ToastAndroid.CENTER
                );
            }).then(() => {
                props.navigation.goBack()
            }).catch = (err => { console.log(err) })
    }


    console.log(Images)
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />

            <SafeAreaView style={{ backgroundColor: 'white' }} />
            <SafeAreaView style={styles.safeContainer} >
                <View style={styles.mainContainer}>
                    <Icons name='left' backgroundColor='white' color='black' size={30} onPress={() => props.navigation.goBack()} />

                    <ScrollView>
                        <Text style={styles.headText}>
                            Add Space Details
                        </Text>

                        <View style={styles.inputView}>
                            <TouchableOpacity onPress={() => selectImage()} style={{ backgroundColor: 'lightgrey', width: wp(40), paddingVertical: hp(2), alignItems: 'center', elevation: 1, alignSelf: 'center' }}>
                                <Text style={{ color: 'white', fontSize: hp(3) }}>Upload Image</Text>
                            </TouchableOpacity>
                            {Images != '' &&
                                <View style={{ width: wp(80), paddingVertical: hp(3), alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={{ uri: Images.Path }} style={{ height: hp(20), width: wp(70), alignSelf: 'center', }} />
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
                            <Picker
                                selectedValue={SelectedValue}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedValue(itemValue)
                                }
                            >
                                <Picker.Item label="Select Type" value="1" />
                                <Picker.Item label="Private" value="Private" />
                                <Picker.Item label="Meeting" value="Meeting" />
                                <Picker.Item label="Seminar" value="Seminar" />
                                <Picker.Item label="Event" value="Event" />
                                <Picker.Item label="Offices" value="Offices" />
                                <Picker.Item label="Hot Desk" value="Hot Desk" />
                            </Picker>
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
                                    CheckData()
                                }}>
                                    <Text style={styles.signupText}>Save</Text>
                                </TouchableOpacity>
                                <ActivityIndicator
                                    animating={isVisible}
                                    style={[{ height: 80 }]}
                                    color="#C00"
                                    size="large"
                                    hidesWhenStopped={true}
                                />
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