import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to your Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            This is a protected area. You have successfully logged in. From here, you can manage your account and access exclusive features.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
