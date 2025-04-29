import { useState, useEffect, useRef } from 'react';
import { IonContent, IonButton, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonInput, IonFooter, IonAvatar, IonText, IonPopover, IonRow, IonCol, IonIcon, IonAlert, IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonLabel, IonSearchbar, createAnimation } from '@ionic/react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../utils/supabaseClient';
import { pencil, trash } from 'ionicons/icons';

interface Post {
  post_id: string;
  user_id: number;
  username: string;
  avatar_url: string;
  post_content: string;
  post_created_at: string;
  post_updated_at: string;
}

const FeedContainer = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postContent, setPostContent] = useState('');
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editModalContent, setEditModalContent] = useState(''); // Not directly used here, but kept for consistency
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [popoverState, setPopoverState] = useState<{ open: boolean; event: Event | null; postId: string | null }>({ open: false, event: null, postId: null });
  const [isAnimatedModalOpen, setIsAnimatedModalOpen] = useState(false);
  const [animatedModalContent, setAnimatedModalContent] = useState('');
  const animatedModalEl = useRef<HTMLIonModalElement>(null);
  const editModalEl = useRef<HTMLIonModalElement>(null);
  const [postToDelete, setPostToDelete] = useState<string | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [searchText, setSearchText] = useState('');

   // Derived list filtered by searchText
   const filteredPosts = posts.filter(p =>
    p.username.toLowerCase().includes(searchText.toLowerCase()) ||
    p.post_content.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    const fetchUser = async () => {
      const { data: authData } = await supabase.auth.getUser();
      if (authData?.user?.email?.endsWith('@nbsc.edu.ph')) {
        setUser(authData.user);
        const { data: userData, error } = await supabase
          .from('users')
          .select('user_id, username, user_avatar_url')
          .eq('user_email', authData.user.email)
          .single();
        if (!error && userData) {
          setUser({ ...authData.user, id: userData.user_id });
          setUsername(userData.username);
        }
      }
    };

    const fetchPosts = async () => {
      const { data, error } = await supabase.from('posts').select('*').order('post_created_at', { ascending: false });
      if (!error) setPosts(data as Post[]);
    };

    fetchUser();
    fetchPosts();
  }, []);

  const createPost = async () => {
    if (!postContent || !user || !username) return;

    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('user_avatar_url')
      .eq('user_id', user.id)
      .single();

    if (userError) {
      console.error('Error fetching user avatar:', userError);
      return;
    }

    const avatarUrl = userData?.user_avatar_url || 'https://ionicframework.com/docs/img/demos/avatar.svg';

    const { data, error } = await supabase
      .from('posts')
      .insert([{ post_content: postContent, user_id: user.id, username, avatar_url: avatarUrl }])
      .select('*');

    if (!error && data) {
      setPosts([data[0] as Post, ...posts]);
    }

    setPostContent('');
  };

  const startEditingPost = (post: Post) => {
    setEditingPost(post);
    setPostContent(post.post_content);
    setIsEditModalOpen(true);
    setPopoverState({ open: false, event: null, postId: null });
  };

  const savePost = async () => {
    if (!postContent || !editingPost) return;
    const { data, error } = await supabase
      .from('posts')
      .update({ post_content: postContent })
      .match({ post_id: editingPost.post_id })
      .select('*');
    if (!error && data) {
      const updatedPost = data[0] as Post;
      setPosts(posts.map(post => (post.post_id === updatedPost.post_id ? updatedPost : post)));
      setPostContent('');
      setEditingPost(null);
      setIsEditModalOpen(false);
      setIsAlertOpen(true);
    }
  };

  const deletePost = async (post_id: string) => {
    await supabase.from('posts').delete().match({ post_id });
    setPosts(posts.filter(post => post.post_id !== post_id));
    setPopoverState({ open: false, event: null, postId: null });
  };

  const openAnimatedModal = (content: string) => {
    setAnimatedModalContent(content);
    setIsAnimatedModalOpen(true);
  };

  const closeAnimatedModal = () => {
    setIsAnimatedModalOpen(false);
  };

  const enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot!;
    const backdropAnimation = createAnimation()
      .addElement(root.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');
    const wrapperAnimation = createAnimation()
      .addElement(root.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);
    return createAnimation()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(200)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  const leaveAnimation = (baseEl: HTMLElement) => {
    return enterAnimation(baseEl).direction('reverse');
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditingPost(null);
    setPostContent('');
  };

  return (
    <>
      <IonContent>
        {user ? (
          <>

           {/* ───── Search Bar ───── */}
           <IonSearchbar
            value={searchText}
            onIonInput={e => setSearchText(e.detail.value!)}
            placeholder="Search posts"
            debounce={300}
          />
            <IonCard>
            <IonCardHeader><IonCardTitle>What's on your mind?</IonCardTitle></IonCardHeader>
            <IonCardContent>
              <IonInput
                value={postContent}
                onIonChange={e => setPostContent(e.detail.value!)}
                placeholder="Write a post..."
              />
            </IonCardContent>
            <IonFooter style={{ display: 'flex', justifyContent: 'flex-end', padding: '0.5rem' }}>
              <IonButton onClick={createPost}>Post</IonButton>
            </IonFooter>
          </IonCard>

          {filteredPosts.map(post => (
              <IonCard key={post.post_id} style={{ marginTop: '2rem' }}>
                <IonCardHeader>
                  <IonRow>
                    <IonCol size="1.85">
                      <IonAvatar>
                        <img alt={post.username} src={post.avatar_url} />
                      </IonAvatar>
                    </IonCol>
                    <IonCol>
                      <IonCardTitle style={{ marginTop: '10px' }}>{post.username}</IonCardTitle>
                      <IonCardSubtitle>{new Date(post.post_created_at).toLocaleString()}</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="auto" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                      <IonButton
                        fill="clear"
                        onClick={(e) =>
                          setPopoverState({
                            open: true,
                            event: e.nativeEvent,
                            postId: post.post_id,
                          })
                        }
                      >
                        <IonIcon color="secondary" icon={pencil} />
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonCardHeader>

                <IonCardContent>
                  <IonText style={{ color: 'black' }}>
                    <h1>
                      {post.post_content.length > 150
                        ? post.post_content.substring(0, 150) + '...'
                        : post.post_content}
                    </h1>
                  </IonText>

                  {post.post_content.length > 150 && (
                    <div style={{ marginTop: '1.0 rem' }}>
                      <IonButton fill="clear" size="small" onClick={() => openAnimatedModal(post.post_content)}>
                        See More
                      </IonButton>
                    </div>
                  )}
                </IonCardContent>

                <IonPopover
                  isOpen={popoverState.open && popoverState.postId === post.post_id}
                  event={popoverState.event}
                  onDidDismiss={() =>
                    setPopoverState({ open: false, event: null, postId: null })
                  }
                >
                  <IonButton fill="clear" onClick={() => startEditingPost(post)}>
                    Edit
                  </IonButton>
                  <IonButton
                    fill="clear"
                    color="danger"
                    onClick={() => {
                      setPostToDelete(post.post_id);
                      setShowDeleteConfirm(true);
                    }}
                  >
                    Delete
                  </IonButton>
                </IonPopover>
              </IonCard>
            ))}
          </>
        ) : (
          <IonLabel>Loading...</IonLabel>
        )}
      </IonContent>

      {/* Animated "See More" Modal */}
      <IonModal
        isOpen={isAnimatedModalOpen}
        onDidDismiss={closeAnimatedModal}
        enterAnimation={enterAnimation}
        leaveAnimation={leaveAnimation}
        ref={animatedModalEl}
      >
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <IonButton onClick={closeAnimatedModal}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonText>
            <h2>{animatedModalContent}</h2>
          </IonText>
        </IonContent>
      </IonModal>

      {/* Edit Post Modal */}
      <IonModal isOpen={isEditModalOpen} onDidDismiss={closeEditModal} ref={editModalEl}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Edit Post</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={closeEditModal}>Cancel</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonInput
            value={postContent}
            onIonChange={e => setPostContent(e.detail.value!)}
            placeholder="Edit your post..."
          />
        </IonContent>
        <IonFooter>
          <IonButton expand="full" onClick={savePost}>Save</IonButton>
        </IonFooter>
      </IonModal>

      <IonAlert
        isOpen={showDeleteConfirm}
        onDidDismiss={() => setShowDeleteConfirm(false)}
        header="Confirm Delete"
        message="Are you sure you want to delete this post?"
        buttons={[
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              setShowDeleteConfirm(false);
            },
          },
          {
            text: 'Delete',
            role: 'destructive',
            handler: async () => {
              if (postToDelete) {
                await deletePost(postToDelete);
                setPostToDelete(null);
              }
              setShowDeleteConfirm(false);
            },
          },
        ]}
      />
    </>
  );
};

export default FeedContainer;
