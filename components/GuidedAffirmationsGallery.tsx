import { View, Text, Pressable, Image } from 'react-native'
import React from 'react';
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import { FlatList } from 'react-native';
import { Link } from 'expo-router';

interface GuidedAffirmationGalleryProps {
    title: String;
    previews: GalleryPreviewData[];
}

const GuidedAffirmationsGallery = ({ title, previews }: GuidedAffirmationGalleryProps) => {
    return (
        <View className='my-5'>
            <View className='mb-2'>
                <Text>GuidedAffirmationsGallery</Text>
            </View>

            <View className='space-y-2'>
                <FlatList
                    data={previews}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Link href={`/affirmations/${item.id}`} asChild>
                            <Pressable>
                                <View className='h-36 w-32 rounded-md mr-4'>
                                    <Image source={item.image} resizeMode='cover' className='w-full h-full' />
                                </View>
                            </Pressable>
                        </Link>
                    )}
                    horizontal
                />
            </View>
        </View>
    )
}

export default GuidedAffirmationsGallery