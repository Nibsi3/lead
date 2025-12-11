'use client';
import { useUser } from "@/firebase";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
    const { user } = useUser();

    if (!user) {
        return (
            <div className="flex items-center justify-center h-full">
                <p>Loading user profile...</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8">User Profile</h1>
            <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <Avatar className="h-20 w-20">
                            {user.photoURL && <AvatarImage src={user.photoURL} alt="User avatar" />}
                            <AvatarFallback className="text-3xl">
                                {user.email?.charAt(0).toUpperCase() || 'U'}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle className="text-2xl">{user.displayName || 'No display name'}</CardTitle>
                            <p className="text-muted-foreground">{user.email}</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <h3 className="font-semibold">User Information</h3>
                        <div className="text-sm text-muted-foreground space-y-1">
                            <p><strong>UID:</strong> {user.uid}</p>
                            <p><strong>Email Verified:</strong> {user.emailVerified ? 'Yes' : 'No'}</p>
                            <p><strong>Account Created:</strong> {user.metadata.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'N/A'}</p>
                             <p><strong>Last Sign-in:</strong> {user.metadata.lastSignInTime ? new Date(user.metadata.lastSignInTime).toLocaleDateString() : 'N/A'}</p>
                        </div>
                    </div>
                    <Button>Edit Profile</Button>
                </CardContent>
            </Card>
        </div>
    );
}
