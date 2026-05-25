# Dossier de preuve technique — Exposition IA

| Dimension | Valeur |
|---|---|
| Archétype | FR-CORPORATE-MID |
| Juridiction | France |
| Secteur | Services professionnels B2B |
| Préparé pour | [Cabinet conseil — usage sous son en-tête] |
| Date | [DATE] |
| Référence | EI-FR-MID-001 |
| Version | 1.0 |

---

## Avertissement important

Le présent document est un dossier de preuve technique structuré, établi pour soutenir le conseil juridique. Il ne constitue ni un avis juridique, ni une consultation, ni une certification de conformité. Il n’apprécie ni la responsabilité réglementaire, ni le statut de conformité de l’entité. Il identifie des indicateurs d’exposition techniques et organisationnels susceptibles de requérir une revue et une interprétation par un conseil qualifié.

Les constats reposent sur une évaluation par archétype. Aucune donnée client brute, aucun dossier du personnel, aucun fichier client, aucune documentation interne, aucune infrastructure de production n’a été consulté ou examiné. Ce rapport caractérise le profil d’exposition d’une classe d’entités correspondant à l’archétype FR-CORPORATE-MID, et non une société nommément désignée.

---

## Section 1 — Synthèse d’exposition

### Archétype examiné

Entité de services professionnels B2B de taille intermédiaire opérant en France, dont le déploiement IA se concentre sur un outil de productivité déployé à l’échelle de l’organisation, Microsoft 365 Copilot, et sur un assistant de scoring commercial géré par l’éditeur, intégré à la plateforme CRM. Chiffre d’affaires d’environ 150–200 M€, effectif de 500 à 1 500 personnes, siège à Paris.

### Profil d’exposition global

L’entité présente un profil d’exposition global **moyen**. Aucun déclencheur de pratique interdite n’est identifié à ce stade. Trois lacunes structurelles créent toutefois une exposition juridique matérielle : l’absence d’inventaire des cas d’usage IA pour un déploiement de Copilot à l’échelle de l’organisation, l’absence de procédure de supervision humaine documentée pour les sorties de scoring CRM susceptibles d’influencer des décisions à proximité de l’emploi, et des contrats fournisseurs qui ne traitent pas des obligations de traitement de données spécifiques à l’IA.

L’exposition est maîtrisable et bornée, mais la posture de gouvernance actuelle crée des vulnérabilités juridiques identifiables, en particulier si l’outil de scoring CRM a été consulté dans un contexte RH ou de gestion de la performance.

**Profil d’exposition : Moyen**

### Trois enjeux prioritaires

1. Microsoft 365 Copilot est déployé à l’échelle de l’organisation sans politique d’usage documentée, sans périmètre de déploiement formel, ni règles de traitement des données définies. Copilot traite les courriels des salariés, les transcriptions de réunions et les documents sans politique écrite régissant les données traitables, la responsabilité applicable ou l’usage des sorties générées par l’IA dans les communications externes.

2. L’assistant de scoring CRM produit des scores au niveau individuel, attribués à des commerciaux nommément désignés et visibles par leurs responsables. Aucune procédure documentée de contestation ou de neutralisation humaine n’existe. La question de savoir si ces sorties ont été référencées dans des décisions relatives à l’emploi ne peut être exclue au niveau de l’archétype. Appréciation juridique requise.

3. Ni l’accord de traitement Microsoft ni le contrat de l’éditeur CRM ne traitent des obligations de traitement spécifiques à l’IA. L’accord de traitement conclu avec Microsoft n’énumère pas explicitement les opérations de traitement réalisées par les fonctions IA, et les conditions IA de l’éditeur CRM sont standard et non négociables, laissant l’entité sans auditabilité contractuelle, sans notification de changement de modèle, ni droit de signalement d’incident.

### Déclencheurs de revue juridique

- Tout élément indiquant que les sorties de scoring CRM ont été référencées dans des entretiens d’évaluation individuels, des décisions de territoire ou des discussions de rémunération.
- Tout usage de transcriptions de réunions ou de brouillons de courriels Copilot dans une procédure disciplinaire RH ou une documentation de performance.
- Tout livrable destiné au client rédigé avec une assistance Copilot substantielle, sans divulgation ni procédure de revue interne.

---

## Section 2 — Périmètre et méthodologie

### Base de l’évaluation

Ce rapport repose sur une évaluation structurée par archétype, conduite contre le profil FR-CORPORATE-MID. Aucune donnée client brute, aucun dossier du personnel, aucun fichier client, aucun code source, ni documentation interne n’a été consulté. L’évaluation caractérise l’exposition structurelle d’une classe reconnaissable d’entités B2B françaises de taille intermédiaire, et non une société nommément désignée.

### Archétype en entrée

| Dimension | Valeur |
|---|---|
| Juridiction | France |
| Secteur | Services professionnels B2B |
| Taille d’entreprise | Mid-market, taille intermédiaire |
| Tranche de CA | 150–200 M€ |
| Tranche d’effectif | 500–1 500 |
| Catégorie de surface IA | Outils de productivité + aide à la décision, scoring géré par l’éditeur |
| Fonctions concernées | Commercial, RH indirect, Opérations, Direction |
| Modèle de déploiement | SaaS intégré, Copilot + scoring CRM géré par l’éditeur |
| Sensibilité réglementaire | Moyenne |
| Niveau de dépendance externe | Modéré |

### Cadre réglementaire applicable

| Cadre | Applicabilité |
|---|---|
| Règlement (UE) 2024/1689 sur l’IA, AI Act | Applicable progressivement. Couvre les pratiques interdites, les obligations des systèmes à haut risque, les exigences de transparence et les règles applicables aux modèles d’IA à usage général. Les calendriers de mise en application et les mesures de soutien restent à vérifier au moment de la mission. |
| RGPD, Règl. (UE) 2016/679 | Pleinement applicable. Le traitement automatisé, les obligations du sous-traitant et les droits des personnes concernées sont directement pertinents pour ce profil de surface IA. |
| Loi Informatique et Libertés | Transposition française du RGPD. La CNIL est l’autorité de contrôle nationale pour la protection des données et conserve un rôle central lorsque les systèmes IA traitent des données personnelles. |
| Code du travail | Les dispositions encadrant le déploiement de technologies sur le lieu de travail et la surveillance des salariés s’appliquent à ce profil de surface IA. Une revue par un conseil est requise pour en déterminer la portée et les obligations. |
| Positions CNIL sur l’IA | Les positions publiées par la CNIL sur l’IA et la protection des données s’appliquent, notamment sur le traitement algorithmique, les AIPD et l’IA au travail. |

### Hypothèses et limites

- Ce rapport suppose des conditions contractuelles standard pour Microsoft 365 Copilot, licence entreprise M365 E3/E5, et pour une plateforme CRM mid-market standard, Salesforce ou équivalent. Des stipulations négociées individuellement peuvent modifier l’analyse de dépendance et d’auditabilité.
- Le profil de surface IA reflète les fonctionnalités publiquement documentées des outils dans les catégories nommées. Des choix de configuration propres à l’entité peuvent élargir ou restreindre l’exposition.
- L’analyse de l’exposition RH repose sur la probabilité structurelle que les indicateurs de performance commerciale soient consultés dans l’évaluation des salariés au sein d’entités de ce profil. Cette hypothèse doit être vérifiée lors de toute mission propre à une entité.
- Les calendriers d’application de l’AI Act sont échelonnés et peuvent être affectés par les mesures européennes de mise en œuvre. Les dates et obligations doivent être confirmées au moment de la revue.

---

## Section 3 — Cartographie de l’exposition aux usages IA

### Vue d’ensemble

La surface IA de l’entité se concentre sur deux outils déployés à l’échelle de l’organisation : Microsoft 365 Copilot, intégré à la suite entreprise Microsoft 365, et un assistant de scoring commercial intégré à la plateforme CRM. Les deux sont gérés par l’éditeur. Aucun ne requiert d’intégration technique interne au-delà de la licence et de l’activation administrative.

Le modèle de déploiement crée une large couverture de surface à faible friction technique, mais une exposition correspondante tout aussi large, sans infrastructure de gouvernance équivalente.

### Inventaire de la surface IA

| Outil IA | Type | Fonctions | Données traitées | Supervision |
|---|---|---|---|---|
| Microsoft 365 Copilot | Productivité : rédaction de courriels, résumé de documents, transcription de réunions, recherche | Toutes : commercial, RH, opérations, direction | Contenu des courriels, audio/transcriptions de réunions, documents internes, données d’agenda | Non documentée. Aucune politique d’usage ni procédure de revue. |
| Assistant de scoring CRM | Aide à la décision : scores de leads, scores de santé de compte, priorisation des opportunités | Commercial principal, opérations, RH indirect | Données de contacts et comptes, historique d’interactions, performance commerciale, indicateurs de pipeline attribués aux salariés | Informelle. Scores consommés sans procédure documentée de neutralisation ou de contestation. |

### Propagation de l’exposition

**Copilot → exposition RH :** la fonction de transcription de réunions de Copilot, si elle est utilisée lors d’entretiens disciplinaires, de réunions d’évaluation ou d’entretiens de recrutement, produit un compte rendu généré par l’IA. Si ce compte rendu est utilisé dans des décisions RH, il constitue un traitement assisté par IA de données personnelles de salariés dans un contexte d’emploi. Aucun élément, au niveau de l’archétype, n’indique que les salariés ont été formellement informés de cette capacité. Appréciation juridique requise.

**Scoring CRM → exposition emploi :** les outils de scoring CRM attribués à des commerciaux individuels génèrent des points de données structurellement capables de mesurer la performance individuelle : taux de conversion du pipeline, score de réactivité aux leads, score de pénétration de compte. Les scores individuels sont visibles par les responsables commerciaux. Si ces indicateurs ont été consultés dans une évaluation, un calcul de prime ou une décision de réallocation de territoire, l’outil est passé de l’aide à la décision commerciale à un traitement automatisé à proximité de l’emploi. La survenance de ce cas ne peut être exclue au niveau de l’archétype. Appréciation juridique requise.

**Copilot → communications externes :** les brouillons générés par Copilot utilisés dans des livrables clients, des communications externes ou des documents juridiques sans procédure de revue interne créent une surface de responsabilité. Les inexactitudes des sorties générées par l’IA et utilisées dans le travail destiné au client peuvent être imputées à l’entité, sans la documentation atténuante d’une étape de revue.

### IA fantôme et surface non documentée

À ce niveau d’archétype, il est structurellement probable que des salariés utilisent des outils d’IA grand public, comme ChatGPT, Claude, Gemini ou équivalents, pour des tâches professionnelles hors du déploiement formel de Copilot. En l’absence de politique d’usage de l’IA, l’entité ne dispose d’aucune base pour démontrer quelles données ont été traitées via ces outils, sous quelles conditions, ni si des données personnelles de clients ou de salariés ont été transmises à des fournisseurs de modèles externes. Cela constitue une extension non documentée de la surface IA.

---

## Section 4 — Vue des dépendances fournisseurs

### Vue d’ensemble

La surface IA de l’entité est intégralement d’origine externe. Aucune capacité de modèle interne n’existe. Les deux outils sont contrôlés par des éditeurs tiers sous conditions contractuelles standard. Les conditions entreprise de Microsoft sont bien documentées mais n’énumèrent pas explicitement toutes les opérations de traitement IA. Les conditions IA de l’éditeur CRM sont standard, non négociables à la taille de cette entité, et n’incluent ni clause d’auditabilité spécifique, ni notification de changement de modèle.

### Tableau des dépendances fournisseurs

| Fournisseur | Criticité | Réversibilité | Auditabilité contractuelle | Lacune clé |
|---|---|---|---|---|
| Microsoft 365 Copilot | Élevée : activé sur la licence M365 entreprise utilisée par tous les salariés | Faible : la désactivation crée une rupture de flux de travail ; aucun repli documenté | Limitée : le DPA couvre les obligations du sous-traitant au titre du RGPD mais n’énumère pas les opérations IA spécifiques | Le DPA ne traite pas explicitement le traitement IA des courriels, réunions et documents. Aucune obligation de notification de changement de modèle. |
| Éditeur scoring CRM | Élevée : sorties intégrées aux flux commerciaux quotidiens | Faible à moyenne : remplacement complet lourd ; désactivation du seul scoring possible mais non documentée | Non documentée : les conditions IA n’incluent ni auditabilité du modèle, ni droit d’explication, ni obligation de suppression spécifique, ni signalement d’incident | Aucun droit contractuel d’auditer le modèle, d’être notifié de ses changements, ni d’obtenir l’explication d’un score individuel. |

### Déclencheurs de revue contractuelle

- DPA Microsoft 365 Copilot : vérifier si l’avenant de traitement existant couvre explicitement les opérations IA réalisées par Copilot, notamment résumé de courriels, transcription de réunions, analyse de documents et recherche. Confirmer que les clauses de localisation des données couvrent l’ensemble du traitement IA, et pas uniquement le stockage.
- Conditions IA de l’éditeur CRM : vérifier si elles incluent des obligations de sous-traitant pour le traitement, par l’assistant de scoring, des données de contacts et des données attribuées aux salariés. Confirmer la présence d’une notification de changement de modèle, de droits d’audit et d’obligations de suppression.
- Divulgation des sous-traitants ultérieurs : les deux éditeurs sous-traiteront des données personnelles à des fournisseurs d’infrastructure de modèles. Confirmer que les listes de sous-traitants incluent ces fournisseurs d’infrastructure IA et que les mécanismes de transfert couvrent toutes les juridictions concernées.

### Évaluation de la réversibilité

**Copilot :** réversible administrativement. La fonction peut être désactivée au niveau du tenant. Toutefois, à cette taille d’archétype et à ce périmètre de déploiement, la désactivation crée une friction opérationnelle simultanée sur toutes les fonctions. Aucune procédure de repli documentée pour la rédaction ou le résumé assistés n’existe. Réversibilité pratique : faible.

**Scoring CRM :** partiellement réversible. La fonction de scoring peut être désactivée si la configuration de l’éditeur le permet. La plateforme CRM elle-même est une dépendance critique sous contrat pluriannuel. Un remplacement complet exigerait au minimum 12 à 18 mois. La désactivation du seul scoring est possible mais non documentée. Réversibilité pratique : faible à moyenne.

---

## Section 5 — Angles morts de gouvernance et lacunes de preuve

Cette section identifie ce qui devrait structurellement exister pour cet archétype, et qui n’existe pas. L’absence est un signal de preuve.

### Ce qui est connu

Du profil structurel de l’archétype : Microsoft 365 Copilot est déployé à l’échelle de l’organisation sous licence entreprise. Un assistant de scoring CRM est actif dans les flux commerciaux. Les deux outils traitent des données personnelles, données de salariés pour Copilot, données de contacts et données attribuées aux salariés pour l’outil de scoring CRM. Le cadre applicable est le RGPD, la loi Informatique et Libertés, l’AI Act, dont l’application est échelonnée, et le Code du travail pour l’usage de l’IA à proximité de l’emploi.

### Ce qui n’est pas démontré

Les éléments de documentation suivants sont absents au niveau de l’archétype :

- **Inventaire des cas d’usage IA :** aucun registre documentant quels outils IA sont déployés, par quelle fonction, sous quelles conditions, et avec quelles implications de traitement. L’expansion de Copilot s’est faite sans mise à jour d’un inventaire formel.
- **Périmètre de déploiement formel de Copilot :** aucun document définissant le périmètre d’usage, fonctions autorisées, cas d’usage interdits, catégories de données traitables.
- **Politique d’usage de l’IA :** aucune politique écrite régissant l’interaction des salariés avec les outils IA, usage acceptable, cas interdits, règles de communication externe, obligations de traitement.
- **Inscriptions au registre des traitements, ROPA :** le registre ne contient pas d’inscriptions distinctes pour les opérations IA de Copilot ni pour les flux de l’assistant de scoring CRM.
- **Procédure de supervision humaine du scoring CRM :** aucune procédure documentée définissant qui revoit les sorties, sous quelles conditions une neutralisation est permise, et comment elle est consignée.
- **Information des salariés sur les capacités de surveillance de Copilot :** aucun élément n’indique que les salariés ont été formellement informés que la transcription de réunions et l’analyse de courriels constituent un traitement assisté par IA de leur activité.
- **Procès-verbal de consultation du CSE :** aucun élément n’indique que le Comité social et économique a été informé et consulté sur le déploiement de Copilot ou de l’outil de scoring CRM. L’existence d’une obligation de consultation requiert une appréciation juridique.

### Ce qui ne peut être établi à ce stade

Les questions d’exposition suivantes ne peuvent être résolues au niveau de l’archétype et requièrent une vérification propre à l’entité :

- Si les indicateurs individuels de l’assistant de scoring CRM ont été consultés, référencés ou utilisés dans une évaluation, un calcul de prime ou une décision d’emploi. C’est le point d’inflexion principal de l’exposition RH.
- Si des transcriptions de réunions Copilot ont été utilisées dans une procédure disciplinaire ou un grief.
- Si un livrable destiné au client a été rédigé avec une assistance Copilot substantielle, et si cette assistance a été divulguée au client.
- Si la liste des sous-traitants ultérieurs de Microsoft pour les fonctions IA de Copilot inclut une infrastructure hors EEE, et si le mécanisme de transfert du DPA actuel couvre ces transferts de manière adéquate.
- La configuration précise du modèle de scoring CRM : quelles entrées il utilise, comment il pondère les variables attribuées aux salariés, et si une sortie constitue une décision juridique ou produisant des effets similaires significatifs.

### Documents qui devraient exister

- [ ] Registre des cas d’usage IA : outils déployés, fonction, éditeur, base contractuelle, catégorie de données.
- [ ] Accords de traitement avec Microsoft et l’éditeur CRM, couvrant spécifiquement le traitement par les fonctions IA.
- [ ] Inscriptions au registre des traitements pour Copilot et le scoring CRM comme opérations distinctes.
- [ ] Procédure de supervision humaine des sorties de scoring CRM.
- [ ] Politique d’usage de l’IA communiquée à l’ensemble des salariés.
- [ ] Procès-verbal de consultation du CSE pour les déploiements de Copilot et du scoring CRM.
- [ ] Information des salariés sur la transcription de réunions et le traitement des courriels par Copilot.
- [ ] AIPD pour le traitement par Copilot des communications et réunions des salariés.
- [ ] Tout registre d’incident lié à l’IA : erreurs de sortie, incidents de traitement, plaintes sur le comportement du modèle.

---

## Section 6 — Signaux d’exposition réglementaire et opérationnelle

### Signaux d’exposition — AI Act

| Condition | Sévérité | Statut |
|---|---|---|
| L’assistant de scoring CRM génère des indicateurs individuels visibles par les responsables. Aucune revue de classification n’a été menée pour apprécier la catégorie réglementaire de l’outil au regard de son usage à proximité de l’emploi. | Élevée | Vérification entité requise |
| Aucune évaluation des outils IA en usage n’a été menée au regard des catégories de risque applicables. Le statut de classification des deux outils déployés est indéterminé. | Moyenne | Confirmé au niveau archétype |
| Aucune information aux salariés sur le fait que les outils IA traitent leurs communications, transcriptions de réunions et activité professionnelle. | Moyenne | Confirmé au niveau archétype |

### Signaux d’exposition — protection des données

| Condition | Sévérité | Statut |
|---|---|---|
| Copilot traite des données personnelles de salariés : courriels, réunions, documents. Aucune inscription correspondante au registre des traitements. Aucune AIPD au dossier. | Élevée | Confirmé au niveau archétype |
| L’assistant de scoring CRM traite des données de contacts et des données attribuées aux salariés. Aucune clause de DPA ne couvre explicitement la fonction de scoring IA comme opération distincte. | Élevée | Confirmé au niveau archétype |
| Aucune base légale documentée pour le traitement par Copilot des communications et réunions des salariés. | Moyenne | Confirmé au niveau archétype |
| Le scoring CRM génère des indicateurs individuels. Aucune procédure de revue humaine documentée pour les usages à proximité de l’emploi. La question de savoir si ces sorties ont influencé des décisions d’emploi requiert une vérification entité. | Élevée | Vérification entité requise |

### Signaux d’exposition — emploi et RH

Les sorties de scoring CRM sont structurées au niveau du salarié individuel. Les scores sont attribués à des commerciaux nommément désignés et visibles par leurs responsables directs. Aucune frontière documentée n’empêche que ces sorties soient référencées dans des décisions d’emploi. Aucun enregistrement de neutralisation, de contestation ou d’exclusion n’existe.

Aucun élément, au niveau de l’archétype, n’indique que le CSE a été informé avant le déploiement d’outils dotés de capacités de suivi individuel des salariés. Aucun élément n’indique que les salariés ont été informés d’un traitement assisté par IA de leurs communications et de leur activité.

Si des indicateurs de scoring ont été consultés dans une évaluation, un calcul de prime ou une allocation de territoire, ou si des transcriptions de réunions ont été utilisées dans une procédure RH, les deux conditions requièrent une appréciation juridique avant que les outils ne se poursuivent dans leur configuration actuelle.

### Signaux d’exposition — PI et contenu

Le contenu généré par Copilot et utilisé dans des livrables clients, propositions ou documents juridiques sans revue crée une responsabilité spécifique en matière de propriété intellectuelle et d’exactitude. L’entité ne peut démontrer ce qui a été généré par l’IA par opposition à ce qui a été rédigé par un humain, ni démontrer que les erreurs générées par l’IA ont été détectées avant livraison. En l’absence de procédure de revue interne, l’entité supporte l’entière responsabilité de tout contenu généré par l’IA utilisé dans le travail destiné au client.

### Signaux d’exposition — achats et fournisseurs

- Le DPA Microsoft n’énumère pas le traitement par les fonctions IA. Le libellé standard du DPA M365 peut ne pas couvrir les opérations IA de Copilot comme activités de traitement distinctes. Cela crée un écart entre le traitement réel et le traitement documenté au registre et au DPA.
- Les conditions IA de l’éditeur CRM ne contiennent aucune obligation de notification de changement de modèle. L’éditeur peut mettre à jour le modèle de scoring sans informer l’entité, modifiant potentiellement la base de génération des scores individuels. L’entité ne dispose d’aucun droit contractuel d’auditer le modèle ou d’en contester les sorties.

### Signaux d’exposition — conseil d’administration et redevabilité

Si des synthèses de direction assistées par Copilot ou des rapports de pipeline générés par le CRM sont présentés au conseil sans divulgation de l’assistance IA et sans étape de revue humaine documentée, les dirigeants ne peuvent démontrer que les informations sur lesquelles ils se sont appuyés ont été vérifiées quant à leur exactitude avant la prise de décision au niveau du conseil.

---

## Section 7 — Voies de remédiation technique

Ces voies réduisent l’exposition de cet archétype. Elles ne constituent pas un avis juridique. Une revue juridique est requise pour confirmer l’adéquation de leur mise en œuvre.

### Priorité 1 — Immédiat

1. Inventaire des cas d’usage IA : désigner un responsable nommé. Documenter chaque outil IA en usage actif : nom, éditeur, fonction, catégorie de données, existence d’un DPA, et périmètre de déploiement. Copilot et l’assistant de scoring CRM en sont les premières entrées. Étendre à tous les autres outils au fur et à mesure de leur identification.

2. Registre fournisseurs : créer un registre à deux colonnes, fournisseur IA et statut DPA / couverture du traitement IA. Pour Microsoft, confirmer si le DPA actuel couvre explicitement les opérations IA de Copilot. Pour l’éditeur CRM, confirmer quelles conditions de traitement régissent spécifiquement l’assistant de scoring.

3. Politique interne d’usage de l’IA, premier projet : rédiger une politique d’une page couvrant les outils IA autorisés, les cas d’usage interdits, comme le traitement de données confidentielles client via des outils IA grand public ou l’usage de l’IA dans des procédures disciplinaires sans autorisation, et les règles applicables au contenu généré par l’IA dans les communications externes. Faire revoir par les RH et le juridique avant publication.

### Priorité 2 — Court terme

1. Évaluation CSE : mobiliser un conseil en droit social pour déterminer si Copilot et l’assistant de scoring CRM nécessitaient une consultation préalable du CSE, et pour structurer le processus approprié si elle n’a pas encore été menée.

2. Information des salariés — Copilot : revue juridique requise pour déterminer la portée et la forme de l’information des salariés concernant les capacités de transcription de réunions et de traitement de courriels de Copilot. Ne pas rédiger sans l’avis d’un conseil sur les exigences applicables.

3. AIPD pour Copilot : commander une analyse d’impact relative à la protection des données couvrant le traitement par Copilot des courriels, transcriptions et documents internes des salariés. L’AIPD devra notamment traiter la base légale, les options de configuration de minimisation, la conservation et les droits des salariés.

4. Revue contractuelle — DPA Microsoft : revue juridique du DPA M365 actuel et des conditions propres à Copilot pour confirmer l’énumération des opérations IA de Copilot, la couverture de la localisation des données pour l’ensemble du traitement IA, l’actualité de la divulgation des sous-traitants et l’adéquation des mécanismes de transfert.

5. Revue contractuelle — assistant de scoring CRM : revue juridique des conditions IA de l’éditeur CRM pour identifier les lacunes dans les obligations de sous-traitant, l’absence de notification de changement de modèle et l’absence de droits d’audit. Apprécier si une renégociation est envisageable ou si des mesures compensatoires sont nécessaires.

### Priorité 3 — Structuré

1. Exercice de classification IA : commander une revue formelle de l’assistant de scoring CRM au regard des catégories de risque applicables, avec une attention particulière à son usage à proximité de l’emploi. Le résultat détermine si des obligations contraignantes s’appliquent au déploiement actuel de l’outil.

2. Mise à jour du registre des traitements : ajouter Copilot et l’assistant de scoring CRM comme inscriptions distinctes, avec finalité de traitement, catégorie de données, base légale, durée de conservation et références des sous-traitants propres.

3. Procédure de supervision humaine — scoring CRM : documenter une procédure formelle définissant qui revoit les scores avant qu’ils n’informent une décision à proximité de l’emploi, quelle autorité de neutralisation cette personne détient, et comment les neutralisations sont consignées. Définir « à proximité de l’emploi » comme incluant les liens entre indicateurs de pipeline et performance.

4. Questionnaire d’achat : développer un jeu de questions de gouvernance IA standard pour tout référencement de nouveau fournisseur dont les outils IA traitent des données personnelles. Questions minimales : un DPA couvrant spécifiquement les opérations IA est-il disponible ? Quelle est la procédure de notification de changement de modèle ? Quelles garanties de suppression s’appliquent aux données traitées par l’IA ? Quels droits d’audit l’entité détient-elle ?

---

## Section 8 — Signaux d’escalade pour revue juridique

Ces conditions, si elles sont identifiées dans une entité correspondant à cet archétype, requièrent un engagement immédiat avec un conseil juridique qualifié avant tout nouveau déploiement IA ou poursuite d’usage.

| Condition | Domaine de risque | Urgence |
|---|---|---|
| Les sorties de scoring CRM ont été référencées dans une évaluation, une décision de prime ou une allocation de territoire individuelles | Emploi + traitement automatisé | Immédiate |
| Des transcriptions de réunions Copilot ont été utilisées dans une documentation disciplinaire, de grief ou de performance | Emploi + protection des données | Immédiate |
| L’outil de scoring CRM est apprécié comme relevant d’une catégorie réglementée à haut risque au regard de son usage à proximité de l’emploi | Conformité AI Act | Immédiate |
| Livrable client contenant un contenu généré par l’IA substantiel, livré sans procédure de revue interne ni divulgation au client | Contractuel + PI | Court terme |
| CSE non consulté avant le déploiement de Copilot ou du scoring CRM | Procédure emploi | Court terme |
| DPA fournisseur jugé ne pas couvrir le traitement par les fonctions IA comme activités distinctes | Traitement de données | Court terme |
| Infrastructure fournisseur située hors EEE sans garanties de transfert documentées | Transfert transfrontalier | Court terme |
| Plainte ou demande d’un salarié relative à un traitement IA non divulgué de ses communications ou de son activité | Emploi + réglementaire | Immédiate si reçue |

---

## Section 9 — Annexes

### A. Archétype en entrée

| Dimension | Valeur |
|---|---|
| Juridiction | France |
| Secteur | Services professionnels B2B |
| Taille d’entreprise | Mid-market |
| Tranche de CA | 150–200 M€ |
| Tranche d’effectif | 500–1 500 |
| Catégorie de surface IA | Outils de productivité + aide à la décision, scoring géré par l’éditeur |
| Fonctions concernées | Commercial, RH indirect, Opérations, Direction |
| Modèle de déploiement | SaaS intégré, Copilot + scoring CRM géré par l’éditeur |
| Sensibilité réglementaire | Moyenne |
| Niveau de dépendance externe | Modéré |

### B. Hypothèses

- L’entité opère une licence Microsoft 365 entreprise standard, E3 ou E5, avec Copilot activé au niveau du tenant. Les fonctions Copilot sont disponibles pour tous les utilisateurs licenciés. Aucun entraînement ou affinage de modèle personnalisé n’a été réalisé.
- L’assistant de scoring CRM est une fonction standard de la plateforme CRM, Salesforce Einstein ou équivalent fonctionnel. Les scores sont générés à partir des seules données internes du CRM. Aucune intégration de données externe n’est supposée.
- L’organisation commerciale est structurée autour de commerciaux individuels dotés de comptes et d’objectifs de pipeline attribués. Les scores CRM sont visibles à la fois par les commerciaux et leurs responsables.
- L’entité emploie entre 500 et 1 500 personnes. Un CSE existe et est actif. Aucune exemption spécifique aux obligations de consultation du CSE ne s’applique.
- Aucun régime sectoriel spécifique, santé, services financiers ou autre, ne s’applique. L’entité opère comme une société de services B2B générale, sans réglementation sectorielle au-delà du cadre corporate et social français standard.
- L’entité n’a fait l’objet d’aucune enquête ou action de la CNIL. La situation réglementaire de référence est vierge.

### C. Liste de contrôle des preuves

Documents qui seraient demandés au début d’une revue juridique de cet archétype :

- [ ] Politique d’usage des outils IA ou numériques existante, ou équivalent.
- [ ] Contrat-cadre Microsoft 365 entreprise et avenant de traitement, y compris les conditions propres à Copilot si documentées séparément.
- [ ] Contrat-cadre de l’éditeur CRM et conditions de la fonction IA/scoring.
- [ ] Registre des traitements, pour vérifier les inscriptions Copilot et scoring CRM.
- [ ] Toute documentation d’AIPD existante pour les outils numériques de travail.
- [ ] Procès-verbaux du CSE pour la période de déploiement de Copilot et du scoring CRM.
- [ ] Règlements intérieurs ou chartes informatiques couvrant l’usage des outils numériques.
- [ ] Éléments RH justifiant la base de toute décision de performance où des données CRM ont pu être référencées.
- [ ] Contrats clients contenant des clauses sur l’usage d’outils IA ou le traitement des données.
- [ ] Calendrier de conservation couvrant les sorties générées par l’IA, résumés Copilot et transcriptions.
- [ ] Tout registre d’incident ou de plainte lié à l’IA.

### D. Terminologie

**AI Act, Règl. (UE) 2024/1689 :** règlement sur l’intelligence artificielle. Application échelonnée. Crée différents ensembles d’obligations selon la classification de risque du système IA et le rôle de fournisseur ou de déployeur. Une revue par un conseil est requise pour déterminer les obligations applicables à un déploiement donné.

**RGPD, Règl. (UE) 2016/679 :** cadre européen de protection des données régissant le traitement des données personnelles des personnes dans l’UE et l’EEE.

**Registre des traitements, ROPA :** registre interne que les organisations doivent tenir, documentant leurs opérations de traitement : finalité, catégories de données, destinataires, durées de conservation. Les outils IA traitant des données personnelles doivent y figurer comme inscriptions distinctes.

**AIPD, DPIA :** analyse d’impact relative à la protection des données. Évaluation structurée requise avant des traitements susceptibles d’engendrer un risque élevé pour les personnes. Apprécie la nécessité, la proportionnalité et l’atténuation des risques du traitement envisagé.

**DPA, accord de traitement :** contrat requis entre un responsable de traitement et un sous-traitant lorsque des données personnelles sont confiées pour traitement. Doit en préciser la portée, la finalité et les conditions.

**Lacune de preuve :** élément de documentation qui devrait structurellement exister pour une entité de ce profil mais qui est absent ou invérifiable au niveau de l’archétype. L’absence n’établit pas une violation, elle identifie une condition requérant une appréciation juridique.

**CSE — Comité social et économique :** instance représentative du personnel dans les entreprises françaises. Les droits d’information et de consultation relatifs aux technologies de travail sont déterminés par les dispositions du droit social applicables. La portée requiert une appréciation juridique pour tout déploiement donné.

### E. Questionnaire de prochaine étape

À l’usage de l’avocat conseil lors de la première mission client suivant ce rapport :

1. L’organisation a-t-elle établi un inventaire de tous les outils IA en usage actif, par fonction ?
2. Quand Microsoft 365 Copilot a-t-il été activé ? Une revue des implications protection des données a-t-elle précédé l’activation ?
3. Le CSE a-t-il été informé et consulté avant le déploiement de Copilot et de l’outil de scoring CRM ?
4. Les salariés savent-ils que Copilot peut transcrire leurs réunions et traiter le contenu de leurs courriels ?
5. Des sorties de scoring CRM ont-elles déjà été référencées dans une évaluation, une discussion de prime ou une décision d’emploi concernant un commercial ?
6. Le DPA Microsoft actuel couvre-t-il explicitement les opérations IA de Copilot ?
7. Quelles sont les conditions de l’éditeur CRM régissant le traitement de données par l’assistant de scoring ?
8. Le contenu généré par l’IA, brouillons ou résumés Copilot, est-il utilisé dans des livrables clients ? Si oui, une procédure de revue existe-t-elle ?
9. Un salarié a-t-il soulevé une préoccupation ou une plainte liée à l’usage d’outils IA ?
10. Existe-t-il un délégué à la protection des données désigné, et est-il informé des déploiements d’outils IA actuels ?

---

Ce document a été préparé selon une méthodologie d’évaluation par archétype, contre le profil FR-CORPORATE-MID. Il ne reflète ni l’accès ni la revue de la documentation, des systèmes, des contrats ou des données internes d’une entité spécifique. L’ensemble des constats est structurel et requiert une validation contre les opérations, contrats et pratiques de gouvernance réels de l’entité avant toute conclusion juridique.

[NOM DU CABINET] | [DATE] | Référence : EI-FR-MID-001
