import { Alert, Button, Keyboard, Modal, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import { Divider } from 'react-native-paper';
import { globalStyles } from "../../utils/constant";
import { useEffect, useState } from "react";
import { IReview } from "./home";
interface IProps {
    modalVisible: boolean;
    setModalVisible: (value: boolean) => void;
    addNewReview: (item: IReview) => void;
    //update
    status: string;
    dataUpdate: IReview | null;
    setDataUpdate: (item: IReview | null) => void,
    reviews: IReview[];
    setReviews: (item: IReview[]) => void
}
const CustomModal = (props: IProps) => {
    const { modalVisible, setModalVisible, addNewReview, status, dataUpdate, setDataUpdate, reviews, setReviews } = props
    const [title, setTitle] = useState<string>("")
    const [star, setStar] = useState<string>("")
    useEffect(() => {
        if (dataUpdate !== null) {
            setTitle(dataUpdate.title)
            setStar(dataUpdate.star + "")
        }
    }, [dataUpdate])
    const addNewOrUpdate = (title: string, star: number) => {
        if (!title) {
            Alert.alert('Lỗi xảy ra', 'Tiêu đề không được để trống!',)
            return
        }

        if (star > 5 || star <= 0) {
            Alert.alert('Lỗi xảy ra', 'Đánh giá từ 1 đến 5!')
            return
        }
        if (status === 'Thêm mới') {
            addNewReview({ id: Math.floor(Math.random() * 999999), title, star })
            setModalVisible(false)
            setTitle(''); setStar('')
        } else {
            let objIndex = reviews.findIndex(obj => obj.id === dataUpdate?.id);
            if (objIndex !== -1 && dataUpdate?.id) {
                reviews[objIndex] = { id: dataUpdate?.id, star: star, title: title }

                setReviews(reviews)
                console.log(reviews)
                setModalVisible(false)
                setTitle(''); setStar(''); setDataUpdate(null)
            } else {
                Alert.alert('Lỗi xảy ra', 'Vui lòng thử lại sau!')
            }
        }
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.modalHeader}>
                        <Text style={[styles.textHeader, globalStyles.appFont]}>{status}</Text>
                        <Pressable
                            onPress={() => { setModalVisible(!modalVisible); setTitle(''); setStar('') }}>
                            <AntDesign name="close" size={24} color="black" />
                        </Pressable>
                    </View>
                    <Divider />
                    {status == 'Cập nhật' ? <View style={styles.modalBody}>
                        <View style={styles.groupInput}>
                            <Text style={[styles.textTitle, globalStyles.appFont]}>Tiêu đề</Text>
                            <TextInput value={title} onChangeText={(value) => setTitle(value)} style={[styles.textInput, globalStyles.appFont]} />
                        </View>
                        <View style={styles.groupInput}>
                            <Text style={[styles.textTitle, globalStyles.appFont]}>Đánh giá</Text>
                            <TextInput value={star} onChangeText={(value) => setStar(value)} keyboardType="numeric" style={[styles.textInput, globalStyles.appFont]} />
                        </View>
                    </View> : <View style={styles.modalBody}>
                        <View style={styles.groupInput}>
                            <Text style={[styles.textTitle, globalStyles.appFont]}>Tiêu đề</Text>
                            <TextInput value={title} onChangeText={(value) => setTitle(value)} style={[styles.textInput, globalStyles.appFont]} />
                        </View>
                        <View style={styles.groupInput}>
                            <Text style={[styles.textTitle, globalStyles.appFont]}>Đánh giá</Text>
                            <TextInput value={star} onChangeText={(value) => setStar(value)} keyboardType="numeric" style={[styles.textInput, globalStyles.appFont]} />
                        </View>
                    </View>}
                    <View style={styles.modalFooter}>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => { setModalVisible(!modalVisible); setTitle(''); setStar(''); setDataUpdate(null) }}>
                            <Text style={[styles.textStyle, globalStyles.appFont]}>Hủy</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonConfirm]}
                            onPress={() => { addNewOrUpdate(title, +star) }}>
                            <Text style={[styles.textStyle, globalStyles.appFont]}>Xác nhận</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '80%'
    },
    button: {
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 5,
        elevation: 2,
        minWidth: 70
    },
    buttonClose: {
        backgroundColor: '#dc3545',
    },
    buttonConfirm: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: '#fff',
        textAlign: 'center',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 7
    },
    textHeader: {
        fontSize: 20,
        fontWeight: '500'
    },
    modalFooter: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'flex-end',
        marginTop: 7
    },
    modalBody: {
        marginVertical: 7,
        gap: 10
    },
    textTitle: {
        fontSize: 15
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    groupInput: {
        gap: 5
    }
})
export default CustomModal