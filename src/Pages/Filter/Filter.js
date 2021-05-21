import React, { useState, Fragment, call } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, TextInput, SafeAreaView, Switch, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import Icons from 'react-native-vector-icons/AntDesign';
import { Checkbox } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import { styling } from './styling';
import { wp } from '../../Global/Styles/Scalling';
import { I18n } from '../../../i18n/I18n';

const Filter = (props) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const [checked, setcheck] = useState('')
    const [rate, setRate] = useState('')
    const [Amenitie, setAmenisties] = useState('')
    const [startPrice, setStartPrice] = useState('')
    const [endPrice, setEndprice] = useState('')
    const selects = () => {
        let obj = {
            Checked: checked,
            Rating: rate,
            Amenitie: Amenitie,
            SPrice: startPrice,
            EPrice: endPrice,
        }
        AsyncStorage.setItem('Filter', JSON.stringify(obj)).then(() => { props.navigation.goBack() })

    }
    const selectsReset = () => {
        let obj = {
            Checked: checked,
            Rating: rate,
            Amenitie: Amenitie,
            SPrice: startPrice,
            EPrice: endPrice,
        }
        AsyncStorage.setItem('Filter', JSON.stringify(obj))

    }
    return (

        <Fragment>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <SafeAreaView backgroundColor='white' />
            <SafeAreaView style={styling.safeContainer} >
                <View style={styling.headView}>
                    <Icons name="left" style={styling.headIcon} color='black' size={24} onPress={() => { props.navigation.goBack() }} />

                    <TouchableOpacity style={styling.resetTXT} onPress={() => {
                        setIsEnabled(false)
                        setAmenisties('')
                        setRate('')
                        setcheck('')
                        setStartPrice('')
                        setEndprice('')
                        selectsReset()

                    }}><Text>Reset</Text></TouchableOpacity>
                </View>
                <View style={styling.mainContainer}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <Text style={styling.filterTXT}>{I18n.t('Filter')}</Text>
                        <View style={styling.availheadView}>
                            <Text style={styling.availTXT}>{I18n.t('Availabilty')}</Text>
                        </View>
                        <View style={styling.availTodayView}>
                            <Text style={styling.availTodayTXT}>{I18n.t('AvailaleToday')}</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#FF2D55" }}
                                thumbColor={isEnabled ? "#E5E5E5" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => {
                                    if (!isEnabled) {
                                        setIsEnabled(true)
                                    } else
                                        setIsEnabled(false)
                                }}
                                value={isEnabled}
                            />
                        </View>
                        <View style={styling.availheadView}>
                            <Text style={styling.availTXT}>{I18n.t('SortOptions')}</Text>
                        </View>
                        <View style={styling.availTodayView}>
                            <Text style={styling.availTodayTXT}>{I18n.t('Popularity')}</Text>
                            <Checkbox
                                status={checked == 'Popularity' ? 'checked' : 'unchecked'}
                                onPress={() => { setcheck('Popularity') }}
                                color='#4CD964'

                            />
                        </View>
                        <View style={styling.availTodayView}>
                            <Text style={styling.availTodayTXT}>{I18n.t('StarRatingH')}</Text>
                            <Checkbox
                                status={checked == 'HighestFirst' ? 'checked' : 'unchecked'}
                                onPress={() => { setcheck('HighestFirst') }}

                            />
                        </View>
                        <View style={styling.availTodayView}>
                            <Text style={styling.availTodayTXT}>{I18n.t('StarRatingL')}</Text>
                            <Checkbox
                                status={checked == 'LowestFirst' ? 'checked' : 'unchecked'}
                                onPress={() => { setcheck('LowestFirst') }}

                            />
                        </View>
                        <View style={styling.availTodayView}>
                            <Text style={styling.availTodayTXT}>{I18n.t('BestReviewedFirst')}</Text>
                            <Checkbox
                                status={checked == 'BestFirst' ? 'checked' : 'unchecked'}
                                onPress={() => { setcheck('BestFirst') }}

                            />
                        </View>

                        <View style={styling.availTodayView}>
                            <Text style={styling.availTodayTXT}>{I18n.t('MostReviewedFirst')}</Text>
                            <Checkbox
                                status={checked == 'MostFirst' ? 'checked' : 'unchecked'}
                                onPress={() => { setcheck('MostFirst') }}
                            />
                        </View>
                        <View style={styling.availTodayView}>
                            <Text style={styling.availTodayTXT}>{I18n.t('PriceL')}</Text>
                            <Checkbox
                                status={checked == 'Pricelowestfirst' ? 'checked' : 'unchecked'}
                                onPress={() => { setcheck('Pricelowestfirst') }}
                            />
                        </View>
                        <View style={styling.availTodayView}>
                            <Text style={styling.availTodayTXT}>{I18n.t('PriceH')}</Text>
                            <Checkbox
                                status={checked == 'Pricehigestfirst' ? 'checked' : 'unchecked'}
                                onPress={() => { setcheck('Pricehigestfirst') }}
                            />
                        </View>
                        <View style={styling.availheadView}>
                            <Text style={styling.availTXT}>{I18n.t('MoreOptions')}</Text>
                        </View>
                        <View style={styling.availTodayView}>
                            <Text style={styling.availTodayTXT}>{I18n.t('Capacity')}</Text>
                            <TextInput style={styling.anyTXT} placeholder={I18n.t('Any')} keyboardType='numeric' />
                        </View>
                        <View style={styling.availTodayView}>
                            <Text style={styling.availTodayTXT}>{I18n.t('SpaceSize')}</Text>
                            <TextInput style={styling.anyTXT} placeholder={I18n.t('Any')} keyboardType='numeric' />
                        </View>
                        <View style={styling.availheadView}>
                            <Text style={styling.availTXT}>{I18n.t('Amenities')}</Text>
                        </View>
                        <View style={styling.amenityView}>
                            <TouchableOpacity style={Amenitie == 'Wifi' ? [styling.amenOpacity, { borderColor: '#FF2D55' }] : styling.amenOpacity} onPress={() => {
                                setAmenisties('Wifi')
                            }}>
                                <Text style={styling.amenTXT}>{I18n.t('Wifi')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Amenitie == 'Projector' ? [styling.amenOpacity, { borderColor: '#FF2D55' }] : styling.amenOpacity} onPress={() => {
                                setAmenisties('Projector')
                            }}>
                                <Text style={styling.amenTXT}>{I18n.t('Projector')}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styling.amenityView}>
                            <TouchableOpacity style={Amenitie == 'White' ? [styling.amenOpacity, { borderColor: '#FF2D55' }] : styling.amenOpacity} onPress={() => {
                                setAmenisties('White')
                            }}>
                                <Text style={styling.amenTXT}>{I18n.t('Whiteboard')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Amenitie == 'Printer' ? [styling.amenOpacity, { borderColor: '#FF2D55' }] : styling.amenOpacity} onPress={() => {
                                setAmenisties('Printer')
                            }} >
                                <Text style={styling.amenTXT}>{I18n.t('PrinterS')}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styling.amenityView}>
                            <TouchableOpacity style={Amenitie == 'Monitor' ? [styling.amenOpacity, { borderColor: '#FF2D55' }] : styling.amenOpacity} onPress={() => {
                                setAmenisties('Monitor')
                            }} >
                                <Text style={styling.amenTXT}>{I18n.t('TvM')}r</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Amenitie == 'Kitchen' ? [styling.amenOpacity, { borderColor: '#FF2D55' }] : styling.amenOpacity} onPress={() => {
                                setAmenisties('Kitchen')
                            }}>
                                <Text style={styling.amenTXT}>{I18n.t('Kitchen')}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styling.availheadView}>
                            <Text style={styling.availTXT}>{I18n.t('PriceRange')}</Text>
                        </View>
                        <View style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: wp(85) }}>
                            <TextInput
                                placeholder='Start'
                                keyboardType='number-pad'
                                style={{
                                    borderWidth: 0.5,
                                    width: wp(30),
                                    borderRadius: wp(3)
                                }}
                                value={startPrice}
                                onChangeText={(val) => {
                                    setStartPrice(val)
                                }}
                            />
                            <TextInput
                                placeholder='End'
                                keyboardType='number-pad'
                                style={{
                                    borderWidth: 0.5,
                                    width: wp(30),
                                    borderRadius: wp(3)
                                }}
                                value={endPrice}
                                onChangeText={(val) => {
                                    setEndprice(val)
                                }}
                            />
                        </View>
                        <View style={styling.availheadView}>
                            <Text style={styling.availTXT}>{I18n.t('StartRating')}</Text>
                        </View>
                        <View style={styling.starView}>
                            <TouchableOpacity style={rate == 1 || rate == 2 || rate == 3 || rate == 4 || rate == 5 ? [styling.starOpacity1, { backgroundColor: '#FF2D55', borderColor: '#FF2D55' }] : styling.starOpacity1} onPress={() => {
                                if (rate == 1) {
                                    setRate('')
                                }
                                else setRate('1')
                            }}>
                                <Text style={rate == 1 || rate == 2 || rate == 3 || rate == 4 || rate == 5 ? [styling.amenTXT, { color: 'white' }] : styling.amenTXT} >1</Text>
                                <Text style={[styling.amenTXT, { color: '#FF9500' }]}> ★</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={rate == 2 || rate == 3 || rate == 4 || rate == 5 ? [styling.starOpacity, { backgroundColor: '#FF2D55', borderColor: '#FF2D55' }] : styling.starOpacity} onPress={() => {
                                if (rate == 2) {
                                    setRate('')
                                }
                                else setRate('2')
                            }}>
                                <Text style={rate == 2 || rate == 3 || rate == 4 || rate == 5 ? [styling.amenTXT, { color: 'white' }] : styling.amenTXT} >2</Text>
                                <Text style={[styling.amenTXT, { color: '#FF9500' }]}> ★</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={rate == 3 || rate == 4 || rate == 5 ? [styling.starOpacity, { backgroundColor: '#FF2D55', borderColor: '#FF2D55' }] : styling.starOpacity} onPress={() => {
                                if (rate == 3) {
                                    setRate('')
                                }
                                else setRate('3')
                            }}>
                                <Text style={rate == 3 || rate == 4 || rate == 5 ? [styling.amenTXT, { color: 'white' }] : styling.amenTXT} >3</Text>
                                <Text style={[styling.amenTXT, { color: '#FF9500' }]}> ★</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={rate == 4 || rate == 5 ? [styling.starOpacity, { backgroundColor: '#FF2D55', borderColor: '#FF2D55' }] : styling.starOpacity} onPress={() => {
                                if (rate == 4) {
                                    setRate('')
                                }
                                else setRate('4')
                            }}>
                                <Text style={rate == 4 || rate == 5 ? [styling.amenTXT, { color: 'white' }] : styling.amenTXT} >4</Text>
                                <Text style={[styling.amenTXT, { color: '#FF9500' }]}> ★</Text>

                            </TouchableOpacity>
                            <TouchableOpacity style={rate == 5 ? [styling.starOpacity2, { backgroundColor: '#FF2D55', borderColor: '#FF2D55' }] : styling.starOpacity2} onPress={() => {
                                if (rate == 5) {
                                    setRate('')
                                }
                                else setRate('5')
                            }}>
                                <Text style={rate == 5 ? [styling.amenTXT, { color: 'white' }] : styling.amenTXT} >5</Text>
                                <Text style={[styling.amenTXT, { color: '#FF9500' }]}> ★</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styling.opacityView}>
                            <TouchableOpacity style={styling.OpacityLog} onPress={() => {
                                selects()
                            }}>
                                <Text style={styling.Opacitytxt}>{I18n.t('ApplyFilter')}</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>

                </View>

            </SafeAreaView >
            <SafeAreaView style={{ backgroundColor: 'white' }} />
        </Fragment>
    )
}

export default Filter;