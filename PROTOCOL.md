# Exposure Intelligence — Engine Protocol

> Layer: internal (engine layer only)
> Version: 1.0
> Audience: sessions building or operating the engine

---

## 1. Engine stack

The Ramification Engine operates as a six-layer stack:

```
MSAE → NCE → IGE → CAE → IRA → FRA
```

Each layer produces structured analytical output that feeds the layer above it. The artifact is the terminal output of the full stack. The stack is never exposed to clients or law firm partners.

---

## 2. Layer definitions (canonical)

**MSAE — Meta-System Architecture Engine**
Maps how rules, measurement frameworks, enforcement mechanisms, and legitimacy structures manufacture the regulatory reality in which all actors operate. Defines the game board: who makes the rules, what is measured, what is enforced, what becomes unquestionable. Explains why the game exists at all.

**NCE — Narrative Compression Engine**
Maps when facts become speakable, when institutions are permitted to act, when coordination can release. Exposes structural silence — what is latent but cannot yet surface because no legitimacy gatekeeper has made it actionable. Identifies narrative lag: the distance between constraints that already exist and the moment they become enforceable in practice.

**IGE — Incentive Geometry Engine**
Maps rewards, penalties, delays, and asymmetries that shape actor behavior independent of truth or optimal outcome. Explains why vendor dependencies persist despite regulatory pressure, why procurement cycles don't self-correct, why governance gaps survive internal awareness. The system stays wrong longer than it should.

**CAE — Constraint Architecture Engine**
Maps binding constraints — physical, temporal, regulatory, capital, organizational, cognitive — that govern all downstream ramifications. Distinguishes binding from latent from releasing constraints. Identifies bottlenecks, irreversibilities, and optionality collapse. The ocean in which all strategic waves must travel.

**IRA — Industrial Ramification Analysis**
Maps structure: actors (nodes), verified relationships (edges), structural forces (vectors), and second/third-order consequences (ramifications). OSINT-only. No predictions. No intent inference. Negative findings are mandatory — what cannot be confirmed is an evidence signal in itself.

**FRA — Forward Ramification Analysis**
Detects which future structures are already being selected by constraints. Produces conditional, edge-anchored chains: "if this constraint tightens, then this structure becomes costly or forced." Not forecasts — conditional structural inevitabilities.

---

## 3. Engine → artifact section mapping

Each artifact section is fed by one or more engine layers. Internal vocabulary never crosses the firewall.

| Engine layer | Artifact section(s) | Internal logic |
|---|---|---|
| **MSAE** | §2 Scope & Methodology + §6 Regulatory & Operational Exposure Signals | Defines rule-making authorities, measurement frameworks, and enforcement mechanisms governing the archetype's jurisdiction. Establishes the regulatory game board. Feeds the jurisdictional overlay in Scope and the regulatory signals in §6. |
| **NCE** | §5 Governance Blind Spots & Evidence Gaps | Silence zones: what is structurally latent but not yet made mandatory by regulators. Where absence of evidence is itself an exposure signal. Client-facing version of the negative-space audit signature. The narrative lag between what is already structurally required and what has not yet been formally demanded. |
| **IGE** | §4 Vendor Dependency View | Why vendor dependencies persist despite regulatory pressure — payoff asymmetries between procurement timelines, contract cycles, and penalty probability. Inaction traps: why entities that know about a gap do not close it. Expressed as dependency type, reversibility, and contract review triggers. |
| **CAE** | §6 Regulatory & Operational Exposure Signals | Binding constraints: regulatory (AI Act applicability, GDPR processor rules, sector-specific obligations), temporal (compliance deadlines, enforcement ramp), organizational (governance gaps, accountability voids). What cannot move without structural rupture. |
| **IRA** | §3 AI Usage Exposure Map + §4 Vendor Dependency View | Structural map: AI deployment vectors by business function, vendor nodes, contractual edges, dependency propagation across the archetype. Negative findings: what is commonly asserted but cannot be verified at archetype level. |
| **FRA** | §7 Technical Mitigation Pathways + §8 Escalation Signals for Legal Review | Conditional chains: which constraints are tightening in the archetype's jurisdiction, which structures are already being selected by regulatory pressure, which trigger conditions make legal action necessary or costly to defer. Expressed as prioritized pathways and specific escalation conditions. |

**Cross-cutting:**
- §1 Executive Exposure Summary synthesizes all layers in plain language.
- §9 Appendix contains the archetype input and assumptions — the only place where the structured input schema appears in the artifact.

---

## 4. OSINT discipline (applied to archetype analysis)

The engine's analytical discipline carries into the artifact:

- No predictions. Conditional structures only: "if X, then Y becomes costly or forced."
- No intent inference. Structure is described, not attributed to any actor's motivation.
- No speculation beyond what the archetype's structural profile supports.
- Negative findings are mandatory. "This record should structurally exist and there is no basis for it in this archetype" is an evidence signal, not an absence of content.
- Every exposure signal must trace to: a regulatory source, a structural constraint, or a dependency in the archetype.

---

## 5. Negative-space audit signature

The engine's signature appears in §5 of every artifact (Governance Blind Spots & Evidence Gaps).

Three categories of absence:

1. **Constraint Trace** — what regulatory or structural constraint applies to this archetype but cannot be evidenced through documentation
2. **Negative Space Evidence** — what documentation should structurally exist for this archetype and does not
3. **Propagation Boundaries** — where the exposure cannot yet be quantified at archetype level, but the boundary of the unknown is identifiable

This section converts structural silence into a legal evidence instrument. It is the differentiating section. A compliance questionnaire cannot produce it. A scanning tool cannot produce it. It requires structural analysis of the archetype against the constraint stack.

---

## 6. Vocabulary firewall (enforcement)

Terms that never appear outside this file or `CONTEXT.md`:

- MSAE, NCE, IGE, CAE, IRA, FRA
- Ramification, ramification engine
- Forced futures
- Negative-space, negative space evidence
- Constraint architecture, constraint trace
- Incentive geometry
- Narrative compression
- Propagation boundaries
- Speakability threshold

Client-facing substitutes (use these only):
- "Exposure signal" — not ramification
- "Evidence gap" — not negative space
- "Regulatory constraint" — not constraint architecture
- "Dependency risk" — not incentive geometry trap
- "Escalation trigger" — not forced future
- "Governance blind spot" — not silence zone
