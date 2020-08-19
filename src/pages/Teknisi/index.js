import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {JSONCategoryTeknisi, DummyDoctor2, DummyDoctor3, DummyDoctor8} from '../../assets';
import {HomeProfile, TeknisiCategory, RatedTeknisi, NewsItem, Gap} from '../../components';
import {fonts, colors, showError} from '../../utils';
import {Fire} from '../../config';

const Teknisi = ({navigation}) => {
    const [news, setNews] = useState([]);
    const [categoryTeknisi, setCategoryTeknisi] = useState([]);
    useEffect(() => {
        Fire.database().ref('news/').once('value').then(res => {
            if (res.val()){
                setNews(res.val());
            }
        }).catch(err => {
            showError(err.message);
        });

        Fire.database().ref('category teknisi/').once('value').then(res => {
            if (res.val()){
                setCategoryTeknisi(res.val());
            }
        }).catch(err => {
            showError(err.message);
        });
    }, []);

    return (
        <View style={styles.page}>
            <View style={styles.content}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.wrapperSection}>
                <Gap height={30} />
                <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
                <Text style={styles.welcome}>Ingin konsultasi dengan siapa hari ini?</Text>
            </View>
            <View style={styles.wrapperScroll}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.category}>
                        <Gap width={32} />
                        {
                            categoryTeknisi.map(item => {
                                return <TeknisiCategory 
                                key={item.id} 
                                category={item.category} 
                                onPress={() => navigation.navigate('ChooseTeknisi')} />;
                            })
                        }
                        <Gap width={22} />
                    </View>
                </ScrollView>
            </View>
            <View style={styles.wrapperSection}>
                <Text style={styles.sectionLabel}>Top Rated Teknisi</Text>
                    <RatedTeknisi 
                        name="Muhammad Rendy" 
                        desc="Teknisi Handphone" 
                        avatar={DummyDoctor2} 
                        onPress={() => navigation.navigate('TeknisiProfile')}  
                    />
                    <RatedTeknisi 
                        name="David Multicom" 
                        desc="Teknisi Laptop" 
                        avatar={DummyDoctor8}
                        onPress={() => navigation.navigate('TeknisiProfile')}   
                    />
                    <RatedTeknisi 
                        name="Nabila Putri Amelia" 
                        desc="Teknisi Komputer" 
                        avatar={DummyDoctor3}
                        onPress={() => navigation.navigate('TeknisiProfile')}   
                    />
                <Text style={styles.sectionLabel}>Good News</Text>
            </View>
            {news.map(item => {
                return (
                    <NewsItem key={item.id} title={item.title} date={item.date} image={item.image} />
                )
            })}
            <Gap height={30} />
            </ScrollView>
            </View>
        </View>
    );
};
  
export default Teknisi;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1,
    },
    content: {
        backgroundColor: colors.white,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    wrapperSection: {
        paddingHorizontal: 16,
    },
    welcome: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16,
        maxWidth: 209,
    },
    category: {
        flexDirection: 'row',
    },
    wrapperScroll: {
        marginHorizontal: -16,
    },
    sectionLabel: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16,
    },
});