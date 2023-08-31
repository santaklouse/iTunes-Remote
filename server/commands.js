
/*

https://alvinalexander.com/apple/itunes-applescript-examples-scripts-mac-reference/

 */

module.exports = {
    togglePlayerState: `tell app "Music" to playpause`,
    playNextTrack: `tell app "Music" to play next track`,
    playPreviousTrack: `tell app "Music" to play previous track`,
    setVolume(val) {
        return `tell app "Music" to set the sound volume to ${val}`
    },
    playPlaylist(val) {
        return `tell app "Music" to play playlist "${val}"`
    },
    playTrack(arr) {
        return `tell application "Music" to play track "${arr[0]}" of playlist "${arr[1]}"`
    },
    getPlayerState: `tell app "Music" to get player state`,
    getCurrentTrack: `tell app "Music" to get name of current track`,
    getCurrentPlaylist: `tell app "Music" to get name of current playlist`,
    getVolume: `tell app "Music" to get the sound volume`,
    getPlaylists: `tell app "Music" to get name of user playlists`,
    getTracksData: `tell app "Music" to get {name, time} of tracks of current playlist`,
    checkAppRunning: `tell application "System Events" to (name of processes) contains "Music"`,
    updatePlayerPosition: `tell app "Music" to get {player position} & {duration} of current track`
}
