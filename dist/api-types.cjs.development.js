'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ClientDeviceEvents = {
  SendChatMessage: 'send-message',
  ConnectAsRouter: 'router',
  ConnectWithToken: 'token',
  ChangeUser: 'change-user',
  RemoveUser: 'remove-user',
  ChangeDevice: 'change-device',
  SetSoundCard: 'set-sound-card',
  ChangeSoundCard: 'change-sound-card',
  RemoveSoundCard: 'remove-sound-card',
  CreateStage: 'create-stage',
  ChangeStage: 'change-stage',
  RemoveStage: 'remove-stage',
  CreateGroup: 'create-group',
  ChangeGroup: 'change-group',
  RemoveGroup: 'remove-group',
  SetCustomGroupVolume: 'set-custom-group-volume',
  SetCustomGroupPosition: 'set-custom-group-position',
  RemoveCustomGroupVolume: 'remove-custom-group-volume',
  RemoveCustomGroupPosition: 'remove-custom-group-position',
  ChangeStageMember: 'change-stage-member',
  RemoveStageMember: 'remove-stage-member',
  ChangeStageDevice: 'change-stage-device',
  RemoveStageDevice: 'remove-stage-device',
  SetCustomStageMemberPosition: 'set-custom-stage-member-position',
  SetCustomStageMemberVolume: 'set-custom-stage-member-volume',
  RemoveCustomStageMemberPosition: 'remove-custom-stage-member-position',
  RemoveCustomStageMemberVolume: 'remove-custom-stage-member-volume',
  SetCustomStageDevicePosition: 'set-custom-stage-device-position',
  SetCustomStageDeviceVolume: 'set-custom-stage-device-volume',
  RemoveCustomStageDevicePosition: 'remove-custom-stage-device-position',
  RemoveCustomStageDeviceVolume: 'remove-custom-stage-device-volume',
  CreateLocalVideoTrack: 'create-local-video-track',
  ChangeLocalVideoTrack: 'change-local-video-track',
  RemoveLocalVideoTrack: 'remove-local-video-track',
  CreateLocalAudioTrack: 'create-local-audio-track',
  ChangeLocalAudioTrack: 'change-local-audio-track',
  RemoveLocalAudioTrack: 'remove-local-audio-track',
  ChangeRemoteAudioTrack: 'change-remote-audio-track',
  SetCustomRemoteAudioTrackPosition: 'set-remote-audio-track-position',
  SetCustomRemoteAudioTrackVolume: 'set-remote-audio-track-volume',
  RemoveCustomRemoteAudioTrackPosition: 'remove-remote-audio-track-position',
  RemoveCustomRemoteAudioTrackVolume: 'remove-remote-audio-track-volume',
  JoinStage: 'join-stage',
  LeaveStage: 'leave-stage',
  LeaveStageForGood: 'leave-stage-for-good'
};

var ClientRouterEvents = {
  Ready: 'ready',
  ChangeRouter: 'change-router',
  StageServed: 'stage-served',
  ChangeStage: 'change-stage',
  StageUnServed: 'stage-unserved'
};

var ServerDeviceEvents = {
  UUIDSuggested: 'uuid',
  LocalDeviceReady: 'ldr',
  UserReady: 'u-r',
  Ready: 'ok',
  UserAdded: 'u-a',
  UserChanged: 'u-c',
  UserRemoved: 'u-r',
  RemoteUserAdded: 'r-u-a',
  RemoteUserChanged: 'r-u-a',
  RemoteUserRemoved: 'r-u-a',
  ChatMessageSend: 'c',
  RouterAdded: 'r-a',
  RouterChanged: 'r-c',
  RouterRemoved: 'r-r',
  DeviceAdded: 'd-a',
  DeviceChanged: 'd-c',
  DeviceRemoved: 'd-r',
  SoundCardAdded: 'sc-a',
  SoundCardChanged: 'sc-c',
  SoundCardRemoved: 'sc-r',
  StageAdded: 's-a',
  StageChanged: 's-c',
  StageRemoved: 's-r',
  StageJoined: 's-j',
  StageLeft: 's-l',
  GroupAdded: 'g-a',
  GroupChanged: 'g-c',
  GroupRemoved: 'g-r',
  CustomGroupPositionAdded: 'c-g-p-a',
  CustomGroupPositionChanged: 'c-g-p-c',
  CustomGroupPositionRemoved: 'c-g-p-r',
  CustomGroupVolumeAdded: 'c-g-v-a',
  CustomGroupVolumeChanged: 'c-g-v-c',
  CustomGroupVolumeRemoved: 'c-g-v-r',
  StageMemberAdded: 'sm-a',
  StageMemberChanged: 'sm-c',
  StageMemberRemoved: 'sm-r',
  CustomStageMemberPositionAdded: 'c-sm-p-a',
  CustomStageMemberPositionChanged: 'c-sm-p-c',
  CustomStageMemberPositionRemoved: 'c-sm-p-r',
  CustomStageMemberVolumeAdded: 'c-sm-v-a',
  CustomStageMemberVolumeChanged: 'c-sm-v-c',
  CustomStageMemberVolumeRemoved: 'c-sm-v-r',
  StageDeviceAdded: 'sd-a',
  StageDeviceChanged: 'sd-c',
  StageDeviceRemoved: 'sd-r',
  CustomStageDevicePositionAdded: 'c-sd-p-a',
  CustomStageDevicePositionChanged: 'c-sd-p-c',
  CustomStageDevicePositionRemoved: 'c-sd-p-r',
  CustomStageDeviceVolumeAdded: 'c-sd-v-a',
  CustomStageDeviceVolumeChanged: 'c-sd-v-c',
  CustomStageDeviceVolumeRemoved: 'c-sd-v-r',
  LocalAudioTrackAdded: 'la-a',
  LocalAudioTrackChanged: 'la-c',
  LocalAudioTrackRemoved: 'la-r',
  LocalVideoTrackAdded: 'lv-a',
  LocalVideoTrackChanged: 'lv-c',
  LocalVideoTrackRemoved: 'lv-r',
  RemoteVideoTrackAdded: 'v-a',
  RemoteVideoTrackChanged: 'v-c',
  RemoteVideoTrackRemoved: 'v-r',
  RemoteAudioTrackAdded: 'a-a',
  RemoteAudioTrackChanged: 'a-c',
  RemoteAudioTrackRemoved: 'a-r',
  CustomRemoteAudioTrackPositionAdded: 'c-a-p-a',
  CustomRemoteAudioTrackPositionChanged: 'c-a-p-c',
  CustomRemoteAudioTrackPositionRemoved: 'c-a-p-r',
  CustomRemoteAudioTrackVolumeAdded: 'c-a-v-a',
  CustomRemoteAudioTrackVolumeChanged: 'c-a-v-c',
  CustomRemoteAudioTrackVolumeRemoved: 'c-a-v-r'
};

var ServerRouterEvents = {
  Ready: 'ok',
  RouterAdded: 'router-added',
  RouterChanged: 'router-changed',
  RouterRemoved: 'router-removed',
  ServeStage: 'serve-stage',
  UnServeStage: 'un-serve-stage'
};

exports.ClientDeviceEvents = ClientDeviceEvents;
exports.ClientRouterEvents = ClientRouterEvents;
exports.ServerDeviceEvents = ServerDeviceEvents;
exports.ServerRouterEvents = ServerRouterEvents;
//# sourceMappingURL=api-types.cjs.development.js.map