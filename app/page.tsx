import { Button, Input } from "@johnshandux/ledger-design-system";

export default function Home() {
  return (
    <main style={{ padding: "40px", maxWidth: "480px" }}>
      <h1>Ledger Bank</h1>

      <div style={{ display: "grid", gap: "24px", marginTop: "32px" }}>
        <Input
          label="Account name"
          hint="Use the name shown on the account."
          placeholder="Enter account name"
        />

        <Input
          label="Reference"
          error="Enter a reference."
          placeholder="Enter reference"
        />

        <Button>Continue</Button>
      </div>
    </main>
  );
}