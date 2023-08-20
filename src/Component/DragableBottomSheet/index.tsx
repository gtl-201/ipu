import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, PanResponder, Platform, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
// import {WINDOW_HEIGHT} from '../../utils';
const WINDOW_HEIGHT = Dimensions.get('window').height;
// const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 0.6;
// const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0;
// const MAX_UPWARD_TRANSLATE_Y =
//     BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT;
// const MAX_DOWNWARD_TRANSLATE_Y = 0;
// const DRAG_THRESHOLD = 40;

const DraggableBottomSheet = ({ children, showUp, percentHeight }) => {

    useEffect(() => {
        showUp === true && springAnimation('up');
    }, [showUp]);

    const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * (percentHeight ? percentHeight : 0.6);
    const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0;
    const MAX_UPWARD_TRANSLATE_Y =
        BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT;
    const MAX_DOWNWARD_TRANSLATE_Y = 0;
    const DRAG_THRESHOLD = 40;

    const animatedValue = useRef(new Animated.Value(0)).current;
    const lastGestureDy = useRef(0);
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                animatedValue.setOffset(lastGestureDy.current);
            },
            onPanResponderMove: (e, gesture) => {
                animatedValue.setValue(gesture.dy);
            },
            onPanResponderRelease: (e, gesture) => {
                animatedValue.flattenOffset();
                lastGestureDy.current += gesture.dy;
                // if (lastGestureDy.current < MAX_UPWARD_TRANSLATE_Y) {
                //   lastGestureDy.current = MAX_UPWARD_TRANSLATE_Y;
                // } else if (lastGestureDy.current > MAX_DOWNWARD_TRANSLATE_Y) {
                //   lastGestureDy.current = MAX_DOWNWARD_TRANSLATE_Y;
                // }

                if (gesture.dy > 0) {
                    // dragging down
                    if (gesture.dy <= DRAG_THRESHOLD) {
                        springAnimation('up');
                    } else {
                        springAnimation('down');
                    }
                } else {
                    // dragging up
                    if (gesture.dy >= -DRAG_THRESHOLD) {
                        springAnimation('down');
                    } else {
                        springAnimation('up');
                    }
                }
            },
        }),
    ).current;
    const [showBg, setShowBg] = useState(false);
    const springAnimation = (direction: 'up' | 'down') => {
        console.log('direction', direction);
        lastGestureDy.current =
            direction === 'down' ? MAX_DOWNWARD_TRANSLATE_Y : MAX_UPWARD_TRANSLATE_Y;
        setShowBg(direction === 'down' ? false : true);
        Animated.spring(animatedValue, {
            toValue: lastGestureDy.current,
            useNativeDriver: true,
        }).start();
    };

    const bottomSheetAnimation = {
        transform: [
            {
                translateY: animatedValue.interpolate({
                    inputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
                    outputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
                    extrapolate: 'clamp',
                }),
            },
        ],
    };

    return (
        <View style={{ flex: 1, zIndex: 10000 }}>
            {showBg
                && <TouchableOpacity onPress={() => springAnimation('down')} style={styles.bgBottomSheet} />
            }
            <Animated.View style={[
                styles.bottomSheet,
                bottomSheetAnimation,
                {
                    height: BOTTOM_SHEET_MAX_HEIGHT,
                    bottom: - BOTTOM_SHEET_MAX_HEIGHT,
                },
            ]}>
                <View style={styles.draggableArea} {...panResponder.panHandlers}>
                    <View style={styles.dragHandle} />
                </View>
                <ScrollView>
                    {children}
                </ScrollView>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgBottomSheet: {
        position: 'absolute',
        width: '100%',
        height: WINDOW_HEIGHT * 2,
        marginTop: -WINDOW_HEIGHT ,
        top: 0,
        backgroundColor: 'gray',
        opacity: 0.3,
    },
    bottomSheet: {
        position: 'absolute',
        width: '100%',
        ...Platform.select({
            android: { elevation: 3 },
            ios: {
                shadowColor: '#a8bed2',
                shadowOpacity: 1,
                shadowRadius: 6,
                shadowOffset: {
                    width: 2,
                    height: 2,
                },
            },
        }),
        backgroundColor: 'white',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        paddingBottom: 10,
        overflow: 'scroll',
    },
    draggableArea: {
        width: 132,
        height: 32,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dragHandle: {
        width: 100,
        height: 6,
        backgroundColor: '#d3d3d3',
        borderRadius: 10,
    },
});

export default DraggableBottomSheet;
