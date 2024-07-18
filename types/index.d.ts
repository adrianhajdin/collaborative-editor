/* eslint-disable no-unused-vars */
declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare type AccessType = ["room:write"] | ["room:read", "room:presence:write"];

declare type RoomAccesses = Record<string, AccessType>;

declare type UserType = "creator" | "editor" | "viewer";

declare type RoomMetadata = {
  creatorId: string;
  email: string;
  title: string;
};

declare type CreateDocumentParams = {
  userId: string;
  email: string;
};

declare type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  color: string;
  userType?: UserType;
};

declare type ShareDocumentParams = {
  roomId: string;
  email: string;
  userType: UserType;
  updatedBy: User;
};

declare type UserTypeSelectorParams = {
  userType: string;
  setUserType: React.Dispatch<React.SetStateAction<UserType>>;
  onClickHandler?: (value: string) => void;
};

declare type ShareDocumentDialogProps = {
  roomId: string;
  collaborators: User[];
  creatorId: string;
  currentUserType: UserType;
};

declare type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

declare type CollaboratorProps = {
  roomId: string;
  email: string;
  creatorId: string;
  collaborator: User;
  user: User;
};

declare type CollaborativeRoomProps = {
  roomId: string;
  roomMetadata: RoomMetadata;
  users: User[];
  currentUserType: UserType;
};

declare type AddDocumentBtnProps = {
  userId: string;
  email: string;
};

declare type DeleteModalProps = { roomId: string };

declare type ThreadWrapperProps = { thread: ThreadData<BaseMetadata> };