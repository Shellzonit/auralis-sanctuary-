package com.yourapp.api

import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.GET

// Data class for the friend topics JSON
data class FriendTopic(val id: String, val topic: String)

data class FriendTopicsResponse(val topics: List<FriendTopic>)

data class MusicTopic(val id: String, val title: String, val artist: String)
data class ArtTopic(val id: String, val title: String, val artist: String)
data class EntertainmentTopic(val id: String, val title: String, val type: String)

data class MusicTopicsResponse(val music: List<MusicTopic>)
data class ArtTopicsResponse(val art: List<ArtTopic>)
data class EntertainmentTopicsResponse(val entertainment: List<EntertainmentTopic>)

interface FriendModeApiService {
    @GET("api/friend-topics.json")
    suspend fun getFriendTopics(): List<FriendTopic>

    @GET("api/music-topics.json")
    suspend fun getMusicTopics(): List<MusicTopic>

    @GET("api/art-topics.json")
    suspend fun getArtTopics(): List<ArtTopic>

    @GET("api/entertainment-topics.json")
    suspend fun getEntertainmentTopics(): List<EntertainmentTopic>

    companion object {
        private const val BASE_URL = "https://www.aiwilding.com/"

        fun create(): FriendModeApiService {
            val retrofit = Retrofit.Builder()
                .baseUrl(BASE_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build()
            return retrofit.create(FriendModeApiService::class.java)
        }
    }
}
